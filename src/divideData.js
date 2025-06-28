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

function versionData(dataArr) {
	let versionObj = {
		"v0": [],
		"v0_6": [],
		"v0_7": [],
		"v1": [],
		"v2": [],
		"v3": [],
		"v4": [],
		"v5": [],
		"v11": [],
		"v12": [],
		"v12_1": [],
		"v13": [],
		"v13_1": [],
		"v14": [],
		"v15": [],
		"v15_1": [],
		"v16": [],
		"noV": []
	};

	for (let i = 0; i < dataArr.length; i++) {

		switch (dataArr[i].version) {
			case 0:
				versionObj.v0.push(dataArr[i]);
				break;
			case 0.6:
				versionObj.v0_6.push(dataArr[i]);
				break;
			case 0.7:
				versionObj.v0_7.push(dataArr[i]);
				break;
			case 1:
				versionObj.v1.push(dataArr[i]);
				break;
			case 2:
				versionObj.v2.push(dataArr[i]);
				break;
			case 3:
				versionObj.v3.push(dataArr[i]);
				break;
			case 4:
				versionObj.v4.push(dataArr[i]);
				break;
			case 5:
				versionObj.v5.push(dataArr[i]);
				break;
			case 11:
				versionObj.v11.push(dataArr[i]);
				break;
			case 12:
				versionObj.v12.push(dataArr[i]);
				break;
			case 12.1:
				versionObj.v12_1.push(dataArr[i]);
				break;
			case 13:
				versionObj.v13.push(dataArr[i]);
				break;
			case 13.1:
				versionObj.v13_1.push(dataArr[i]);
				break;
			case 14:
				versionObj.v14.push(dataArr[i]);
				break;
			case 15:
				versionObj.v15.push(dataArr[i]);
				break;
			case 15.1:
				versionObj.v15_1.push(dataArr[i]);
				break;
			case 16:
				versionObj.v16.push(dataArr[i]);
				break;
			default:
				versionObj.noV.push(dataArr[i]);
				break;
		}

		delete dataArr[i].version;
	}
	return versionObj;
}

function groupData(dataArr) {
	let groupObj = {
		"g0": [],
		"g1": [],
		"g2": [],
		"g3": [],
		"g4": [],
		"g5": [],
		"g6": [],
		"g7": [],
		"g8": [],
		"g9": [],
		"noG": []
	};

	for (let i = 0; i < dataArr.length; i++) {

		switch (dataArr[i].group) {
			case 0:
				groupObj.g0.push(dataArr[i]);
				break;
			case 1:
				groupObj.g1.push(dataArr[i]);
				break;
			case 2:
				groupObj.g2.push(dataArr[i]);
				break;
			case 3:
				groupObj.g3.push(dataArr[i]);
				break;
			case 4:
				groupObj.g4.push(dataArr[i]);
				break;
			case 5:
				groupObj.g5.push(dataArr[i]);
				break;
			case 6:
				groupObj.g6.push(dataArr[i]);
				break;
			case 7:
				groupObj.g7.push(dataArr[i]);
				break;
			case 8:
				groupObj.g8.push(dataArr[i]);
				break;
			case 9:
				groupObj.g9.push(dataArr[i]);
				break;
			default:
				groupObj.noG.push(dataArr[i]);
				break;
		}

		delete dataArr[i].group;
	}
	return groupObj;
}

// const dataByVersion = versionData(baseData);
// const jsonOutput = JSON.stringify(dataByVersion, null, 2); // pretty-printed
// const outputPath = path.join(__dirname, 'emojiByVersion.json');
// fs.writeFileSync(outputPath, jsonOutput, 'utf-8');

const dataByGroup = groupData(baseData);
const jsonOutput = JSON.stringify(dataByGroup, null, 2); // pretty-printed
const outputPath = path.join(__dirname, 'emojiByGroup.json');
fs.writeFileSync(outputPath, jsonOutput, 'utf-8');
