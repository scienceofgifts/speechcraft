import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

// CRC32 table
const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[i] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function writeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const crc = crc32(chunk.subarray(4, 8 + len));
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function createPng(width, height, renderPixel) {
  const bytesPerPixel = 4;
  const rawRowLen = width * bytesPerPixel;
  const rawData = Buffer.alloc(height * (rawRowLen + 1));

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (rawRowLen + 1);
    rawData[rowOffset] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = renderPixel(x / width, y / height, x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData, { level: 9 });

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const chunks = [
    signature,
    writeChunk('IHDR', ihdr),
    writeChunk('IDAT', deflated),
    writeChunk('IEND', Buffer.alloc(0))
  ];

  return Buffer.concat(chunks);
}

// Math helpers for rendering the SpeechCraft emblem
function lerp(a, b, t) { return a + (b - a) * t; }

function distSqPointToSegment(px, py, x1, y1, x2, y2) {
  const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  if (l2 === 0) return (px - x1) * (px - x1) + (py - y1) * (py - y1);
  let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
  t = Math.max(0, Math.min(1, t));
  const dx = px - (x1 + t * (x2 - x1));
  const dy = py - (y1 + t * (y2 - y1));
  return dx * dx + dy * dy;
}

function distToRoundRect(px, py, rx, ry, rw, rh, rad) {
  const cx = Math.max(rx + rad, Math.min(px, rx + rw - rad));
  const cy = Math.max(ry + rad, Math.min(py, ry + rh - rad));
  return Math.hypot(px - cx, py - cy) - rad;
}

function distToArc(px, py, cx, cy, r, startAngle, endAngle) {
  const dx = px - cx;
  const dy = py - cy;
  const d = Math.hypot(dx, dy);
  let angle = Math.atan2(dy, dx);
  if (angle < 0) angle += Math.PI * 2;
  // If angle is within arc, return abs(d - r)
  if (angle >= startAngle && angle <= endAngle) {
    return Math.abs(d - r);
  }
  // Otherwise distance to endpoints
  const p1x = cx + r * Math.cos(startAngle);
  const p1y = cy + r * Math.sin(startAngle);
  const p2x = cx + r * Math.cos(endAngle);
  const p2y = cy + r * Math.sin(endAngle);
  return Math.min(Math.hypot(px - p1x, py - p1y), Math.hypot(px - p2x, py - p2y));
}

function renderEmblem(u, v, x, y, size, isMaskable = false) {
  // Map coordinates to 0..512 canvas
  const scale = isMaskable ? 0.72 : 0.88;
  const offset = (1 - scale) * 256;
  const cx = 256;
  const cy = 256;

  // Background gradient: #0d1527 to #040711
  const bgT = (u + v) * 0.5;
  let bgR = Math.round(lerp(14, 4, bgT));
  let bgG = Math.round(lerp(23, 7, bgT));
  let bgB = Math.round(lerp(38, 17, bgT));

  if (!isMaskable) {
    // Squircle container bounds
    const boxMargin = 14;
    const boxSize = 512 - boxMargin * 2;
    const boxRadius = 112;
    const dBox = distToRoundRect(u * 512, v * 512, boxMargin, boxMargin, boxSize, boxSize, boxRadius);
    if (dBox > 1) {
      return [0, 0, 0, 0]; // Transparent outside squircle
    }
    // Rim stroke: teal #2dd4bf to cyan #0284c7
    if (dBox >= -10 && dBox <= 0) {
      const rimAlpha = Math.max(0, Math.min(1, 1 - Math.abs(dBox + 5) / 5));
      const rimR = Math.round(lerp(45, 2, u));
      const rimG = Math.round(lerp(212, 132, u));
      const rimB = Math.round(lerp(191, 199, u));
      bgR = Math.round(lerp(bgR, rimR, rimAlpha * 0.75));
      bgG = Math.round(lerp(bgG, rimG, rimAlpha * 0.75));
      bgB = Math.round(lerp(bgB, rimB, rimAlpha * 0.75));
    }
  }

  // Normalized coords for emblem
  const ex = (u * 512 - offset) / scale;
  const ey = (v * 512 - offset) / scale;

  // Core colors:
  // Teal: #5eead4 (94, 234, 212) -> #14b8a6 (20, 184, 166) -> #0284c7 (2, 132, 199)
  const fgT = Math.max(0, Math.min(1, (ex + ey) / 600));
  const fgR = Math.round(lerp(94, 2, fgT));
  const fgG = Math.round(lerp(234, 132, fgT));
  const fgB = Math.round(lerp(212, 199, fgT));

  let finalR = bgR;
  let finalG = bgG;
  let finalB = bgB;
  let finalA = 255;

  // Helper to blend element
  function blendColor(dist, r, g, b, alpha = 1.0) {
    if (dist <= 0) {
      finalR = r; finalG = g; finalB = b;
    } else if (dist < 1.5) {
      const a = (1 - dist / 1.5) * alpha;
      finalR = Math.round(lerp(finalR, r, a));
      finalG = Math.round(lerp(finalG, g, a));
      finalB = Math.round(lerp(finalB, b, a));
    }
  }

  // 1. Audio Resonance Bars
  // Outer Left: x=72, y=236, w=28, h=56, r=14
  const dBar1 = distToRoundRect(ex, ey, 72, 236, 28, 56, 14);
  blendColor(dBar1, fgR, fgG, fgB, 0.85);

  // Mid Left: x=124, y=190, w=32, h=148, r=16
  const dBar2 = distToRoundRect(ex, ey, 124, 190, 32, 148, 16);
  blendColor(dBar2, fgR, fgG, fgB, 0.9);

  // Mid Right: x=356, y=190, w=32, h=148, r=16
  const dBar3 = distToRoundRect(ex, ey, 356, 190, 32, 148, 16);
  blendColor(dBar3, fgR, fgG, fgB, 0.9);

  // Outer Right: x=412, y=236, w=28, h=56, r=14
  const dBar4 = distToRoundRect(ex, ey, 412, 236, 28, 56, 14);
  blendColor(dBar4, fgR, fgG, fgB, 0.85);

  // 2. Microphone Capsule
  // Body: x=202, y=108, w=108, h=176, r=54
  const dCapsule = distToRoundRect(ex, ey, 202, 108, 108, 176, 54);
  blendColor(dCapsule, fgR, fgG, fgB, 1.0);

  // Specular highlight on capsule
  if (dCapsule <= 0 && ey < 155) {
    const dHighlight = Math.hypot(ex - 256, (ey - 130) * 1.5) - 32;
    if (dHighlight < 0) {
      const hAlpha = Math.max(0, -dHighlight / 32) * 0.45;
      finalR = Math.round(lerp(finalR, 255, hAlpha));
      finalG = Math.round(lerp(finalG, 255, hAlpha));
      finalB = Math.round(lerp(finalB, 255, hAlpha));
    }
  }

  // Grille line accent
  if (dCapsule <= 0 && Math.abs(ey - 196) < 4) {
    finalR = Math.round(lerp(finalR, 4, 0.45));
    finalG = Math.round(lerp(finalG, 47, 0.45));
    finalB = Math.round(lerp(finalB, 46, 0.45));
  }

  // 3. Shockmount Arc: semicircle centered at 256, 210, radius 84, stroke 26
  const dArc = distToArc(ex, ey, 256, 210, 84, 0, Math.PI) - 13;
  blendColor(dArc, fgR, fgG, fgB, 1.0);

  // 4. Stand Stem: line (256, 294) to (256, 360), stroke 26
  const dStem = Math.sqrt(distSqPointToSegment(ex, ey, 256, 294, 256, 360)) - 13;
  blendColor(dStem, fgR, fgG, fgB, 1.0);

  // 5. Stand Base: line (196, 376) to (316, 376), stroke 26
  const dBase = Math.sqrt(distSqPointToSegment(ex, ey, 196, 376, 316, 376)) - 13;
  blendColor(dBase, fgR, fgG, fgB, 1.0);

  // 6. Gold Star Craft Accent (Top Right)
  const starCX = 390;
  const starCY = 86;
  const sdx = Math.abs(ex - starCX);
  const sdy = Math.abs(ey - starCY);
  const starRadius = 38;
  if (sdx < starRadius && sdy < starRadius) {
    const starDist = Math.sqrt(sdx) + Math.sqrt(sdy) - Math.sqrt(starRadius);
    if (starDist <= 0) {
      // Warm gold: #fef08a to #f59e0b
      const goldR = 250;
      const goldG = 204;
      const goldB = 21;
      blendColor(starDist * 8, goldR, goldG, goldB, 1.0);
    }
  }

  return [finalR, finalG, finalB, finalA];
}

console.log('Generating high-resolution PWA and Favicon PNG assets...');

const icons = [
  { name: 'apple-touch-icon.png', size: 180, isMaskable: false },
  { name: 'pwa-192x192.png', size: 192, isMaskable: false },
  { name: 'pwa-512x512.png', size: 512, isMaskable: false },
  { name: 'pwa-maskable-512x512.png', size: 512, isMaskable: true },
  { name: 'favicon-32x32.png', size: 32, isMaskable: false },
  { name: 'favicon-16x16.png', size: 16, isMaskable: false },
];

for (const icon of icons) {
  const buf = createPng(icon.size, icon.size, (u, v, x, y, w, h) =>
    renderEmblem(u, v, x, y, icon.size, icon.isMaskable)
  );
  const outPath = path.join(publicDir, icon.name);
  fs.writeFileSync(outPath, buf);
  console.log(`✓ Wrote ${icon.name} (${icon.size}x${icon.size}, ${(buf.length / 1024).toFixed(1)} KB)`);
}

console.log('All icons generated successfully!');
