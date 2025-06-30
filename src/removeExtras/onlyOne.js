const fs = require('fs');
const path = require('path');

// Read original.json
const ogPath = path.join(__dirname, '../../data/cutExtras/esourceNew.json');
const ogContent = fs.readFileSync(ogPath, 'utf-8');

const ogData = JSON.parse(ogContent);

// Apply transformation function

function deleteButOne(data) {

	let newArr = [];

	for (let i = 0; i < data.length; i++) {
			if (!data[i].texts) {
			newArr.push(data[i].texts);
	} }
	return newArr;
}

const newData = deleteButOne(ogData);

// Step 4: Convert to string
const jsonOutput = JSON.stringify(newData, null, 2); // pretty-printed

// Step 5: Write to new file
const outputPath = path.join(__dirname, '../../data/cutExtras/justTexts.json');
fs.writeFileSync(outputPath, jsonOutput, 'utf-8');
