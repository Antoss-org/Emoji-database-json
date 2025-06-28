const fs = require('fs');
const path = require('path');

// Step 1: Read original.json
const originalPath = path.join(__dirname, 'emojibase.json');
const originalContent = fs.readFileSync(originalPath, 'utf-8');

// Step 2: Parse JSON into an object or array
const originalData = JSON.parse(originalContent);

// Step 3: Apply transformation function
function removeSkins(dataArray) {
  return dataArray.map(item => {
    if (Array.isArray(item.skins)) {
      delete item.skins;
      item.hasSkin = true;
    }
    return item;
  });
}

const noSkinsData = removeSkins(originalData);

// Step 4: Convert to string
const jsonOutput = JSON.stringify(noSkinsData, null, 2); // pretty-printed

// Step 5: Write to new file
const outputPath = path.join(__dirname, 'NoSkins.json');
fs.writeFileSync(outputPath, jsonOutput, 'utf-8');

console.log('✅ Skins removed and saved to NoSkins.json');
