const fs = require('fs');
const path = require('path');

// Step 1: Read original.json
const originalPath = path.join(__dirname, 'NoSkins.json');
const originalContent = fs.readFileSync(originalPath, 'utf-8');

// Step 2: Parse JSON into an object or array
const originalData = JSON.parse(originalContent);

// Step 3: Apply transformation function
function checkGroups(dataArray) {
	let versionArr = [];

	for (let i = 0; i < dataArray.length; i++) {
		if (dataArray[i].version > 0 && dataArray[i].version < 1) {
			versionArr.push(dataArray[i]);
		}
	}
	return versionArr;
}

const noGroupsData = checkGroups(originalData);

// Step 4: Convert to string
const jsonOutput = JSON.stringify(noGroupsData, null, 2); // pretty-printed

// Step 5: Write to new file
const outputPath = path.join(__dirname, 'Versions.json');
fs.writeFileSync(outputPath, jsonOutput, 'utf-8');

console.log('✅ Groups checked and saved to Versions.json');
