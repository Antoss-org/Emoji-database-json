const fs = require('fs');
const path = require('path');

// Step 1: Read original.json
const ogPath = path.join(__dirname, '../../data/full/emojipediaFull.json');
const ogContent = fs.readFileSync(ogPath, 'utf-8');

// Step 2: Parse JSON into an object or array
const ogData = JSON.parse(ogContent);

// Step 3: Apply transformation function
function removeObject(dataArr) {

	for (let i = 0; i < dataArr.length; i++) {

		// new: U+1F5A5,U+FE0F
		if (dataArr[i].codepointsHex) { dataArr[i].codepointsHex = dataArr[i].codepointsHex.join(); }
		if (dataArr[i].emojiVersion) { dataArr[i].emojiVersion = dataArr[i].emojiVersion.slug }
		if (dataArr[i].version) { dataArr[i].version = dataArr[i].version.slug }


		if (dataArr[i].components) { delete dataArr[i].components; }
		if (dataArr[i].description) { delete dataArr[i].description; }
		if (dataArr[i].shortcodes) {
			for (let j = 0; j < dataArr[i].shortcodes.length; j++) {
				delete dataArr[i].shortcodes[j].vendor; }}


	}
	return dataArr;
}

const newData = removeObject(ogData);

// Convert to string
const jsonOutput = JSON.stringify(newData, null, 2); // pretty-printed

// Write to new file
const outputPath = path.join(__dirname, '../../data/cutExtras/pediaNew.json');
fs.writeFileSync(outputPath, jsonOutput, 'utf-8');
