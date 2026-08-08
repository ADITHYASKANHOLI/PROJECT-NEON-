const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const emblemSource = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\f8a8a04c-9c02-4a2b-94cb-f773aeaa37c6\\.user_uploaded\\media_1786186110441.png';
const fullLogoSource = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\f8a8a04c-9c02-4a2b-94cb-f773aeaa37c6\\.user_uploaded\\media_1786185540468.png';

const publicDir = path.join(__dirname, '..', 'public');

async function processImages() {
  console.log('Processing standalone emblem...');
  
  // 1. Process Standalone Emblem: Make white background transparent
  const emblemBuffer = await sharp(emblemSource)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = emblemBuffer;
  const numPixels = info.width * info.height;

  for (let i = 0; i < numPixels; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];

    // If pixel is white or near white (> 242 RGB average)
    if (r > 242 && g > 242 && b > 242) {
      // Calculate smooth alpha falloff for anti-aliasing
      const lightness = (r + g + b) / 3;
      if (lightness >= 252) {
        data[i * 4 + 3] = 0; // Fully transparent
      } else {
        const factor = (252 - lightness) / 10;
        data[i * 4 + 3] = Math.round(255 * factor);
      }
    }
  }

  // Trim padding around emblem
  const transparentEmblem = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .trim()
    .png()
    .toBuffer();

  // Save standalone transparent emblem
  const emblemPath = path.join(publicDir, 'biocore-emblem.png');
  fs.writeFileSync(emblemPath, transparentEmblem);
  console.log(`Saved transparent emblem to ${emblemPath}`);

  // 2. Process Full Logo: Make white background transparent
  const fullBuffer = await sharp(fullLogoSource)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const fullData = fullBuffer.data;
  const fullInfo = fullBuffer.info;
  const fullPixels = fullInfo.width * fullInfo.height;

  for (let i = 0; i < fullPixels; i++) {
    const r = fullData[i * 4];
    const g = fullData[i * 4 + 1];
    const b = fullData[i * 4 + 2];

    if (r > 240 && g > 240 && b > 240) {
      const lightness = (r + g + b) / 3;
      if (lightness >= 252) {
        fullData[i * 4 + 3] = 0;
      } else {
        const factor = (252 - lightness) / 12;
        fullData[i * 4 + 3] = Math.round(255 * factor);
      }
    }
  }

  const transparentFull = await sharp(fullData, {
    raw: { width: fullInfo.width, height: fullInfo.height, channels: 4 }
  })
    .trim()
    .png()
    .toBuffer();

  const fullLogoPath = path.join(publicDir, 'biocore-logo.png');
  fs.writeFileSync(fullLogoPath, transparentFull);
  console.log(`Saved transparent full logo to ${fullLogoPath}`);

  // 3. Generate Favicon Assets from Standalone Emblem
  await sharp(transparentEmblem)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'favicon.png'));

  await sharp(transparentEmblem)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'icon-48.png'));

  await sharp(transparentEmblem)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'apple-icon.png'));

  await sharp(transparentEmblem)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'icon-192.png'));

  await sharp(transparentEmblem)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(publicDir, 'icon-512.png'));

  // Also copy 32x32 PNG to favicon.ico / src/app/favicon.ico
  const fav32 = await sharp(transparentEmblem)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), fav32);
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'app', 'favicon.ico'), fav32);

  console.log('Favicon and icon assets generated successfully!');
}

processImages().catch(console.error);
