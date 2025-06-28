const fs = require('fs');
const path = require('path');

// Read original.json
const basePath = path.join(__dirname, './databases/emojibase/emojibase.json');
const baseContent = fs.readFileSync(basePath, 'utf-8');
const baseData = JSON.parse(baseContent);

const pediaPath = path.join(__dirname, './databases/emojipedia/emojipedia.json');
const pediaContent = fs.readFileSync(pediaPath, 'utf-8');
const pediaData = JSON.parse(pediaContent);

const dsourcePath = path.join(__dirname, './databases/emoji-datasource/emoji_pretty.json');
const dsourceContent = fs.readFileSync(dsourcePath, 'utf-8');
const dsourceData = JSON.parse(dsourceContent);

// const dataByVersion = versionData(baseData);
// const jsonOutput = JSON.stringify(dataByVersion, null, 2); // pretty-printed
// const outputPath = path.join(__dirname, 'emojiByVersion.json');
// fs.writeFileSync(outputPath, jsonOutput, 'utf-8');

const dataByGroup = groupData(baseData);
const jsonOutput = JSON.stringify(dataByGroup, null, 2); // pretty-printed
const outputPath = path.join(__dirname, 'emojiByGroup.json');
fs.writeFileSync(outputPath, jsonOutput, 'utf-8');
