const fs = require('fs');
const path = require('path');

// Step 1: Read original.json
const ogPath = path.join(__dirname, '../../data/full/emojiDatasource.json');
const ogContent = fs.readFileSync(ogPath, 'utf-8');

// Step 2: Parse JSON into an object or array
const ogData = JSON.parse(ogContent);

// Step 3: Apply transformation function
function removeObject(data) {
	for (let i = 0; i < data.length; i++) {

		delete data[i].image;
		delete data[i].sheet_x;
		delete data[i].sheet_y;
		delete data[i].has_img_apple;
		delete data[i].has_img_google;
		delete data[i].has_img_twitter;
		delete data[i].has_img_facebook;

		delete data[i].docomo;
		delete data[i].au;
		delete data[i].softbank;

		if (!data[i].text) { delete data[i].text; }
		if (!data[i].texts) { delete data[i].texts; }

		if (data[i].skin_variations) {

			if (data[i].skin_variations["1F3FB"]) {
				delete data[i].skin_variations["1F3FB"].image;
				delete data[i].skin_variations["1F3FB"].sheet_x;
				delete data[i].skin_variations["1F3FB"].sheet_y;
				delete data[i].skin_variations["1F3FB"].has_img_apple;
				delete data[i].skin_variations["1F3FB"].has_img_google;
				delete data[i].skin_variations["1F3FB"].has_img_twitter;
				delete data[i].skin_variations["1F3FB"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FC"]) {
				delete data[i].skin_variations["1F3FC"].image;
				delete data[i].skin_variations["1F3FC"].sheet_x;
				delete data[i].skin_variations["1F3FC"].sheet_y;
				delete data[i].skin_variations["1F3FC"].has_img_apple;
				delete data[i].skin_variations["1F3FC"].has_img_google;
				delete data[i].skin_variations["1F3FC"].has_img_twitter;
				delete data[i].skin_variations["1F3FC"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FD"]) {
				delete data[i].skin_variations["1F3FD"].image;
				delete data[i].skin_variations["1F3FD"].sheet_x;
				delete data[i].skin_variations["1F3FD"].sheet_y;
				delete data[i].skin_variations["1F3FD"].has_img_apple;
				delete data[i].skin_variations["1F3FD"].has_img_google;
				delete data[i].skin_variations["1F3FD"].has_img_twitter;
				delete data[i].skin_variations["1F3FD"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FE"]) {
				delete data[i].skin_variations["1F3FE"].image;
				delete data[i].skin_variations["1F3FE"].sheet_x;
				delete data[i].skin_variations["1F3FE"].sheet_y;
				delete data[i].skin_variations["1F3FE"].has_img_apple;
				delete data[i].skin_variations["1F3FE"].has_img_google;
				delete data[i].skin_variations["1F3FE"].has_img_twitter;
				delete data[i].skin_variations["1F3FE"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FF"]) {
				delete data[i].skin_variations["1F3FF"].image;
				delete data[i].skin_variations["1F3FF"].sheet_x;
				delete data[i].skin_variations["1F3FF"].sheet_y;
				delete data[i].skin_variations["1F3FF"].has_img_apple;
				delete data[i].skin_variations["1F3FF"].has_img_google;
				delete data[i].skin_variations["1F3FF"].has_img_twitter;
				delete data[i].skin_variations["1F3FF"].has_img_facebook;
			}


			if (data[i].skin_variations["1F3FB-1F3FB"]) {
				delete data[i].skin_variations["1F3FB-1F3FB"].image;
				delete data[i].skin_variations["1F3FB-1F3FB"].sheet_x;
				delete data[i].skin_variations["1F3FB-1F3FB"].sheet_y;
				delete data[i].skin_variations["1F3FB-1F3FB"].has_img_apple;
				delete data[i].skin_variations["1F3FB-1F3FB"].has_img_google;
				delete data[i].skin_variations["1F3FB-1F3FB"].has_img_twitter;
				delete data[i].skin_variations["1F3FB-1F3FB"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FC-1F3FB"]) {
				delete data[i].skin_variations["1F3FC-1F3FB"].image;
				delete data[i].skin_variations["1F3FC-1F3FB"].sheet_x;
				delete data[i].skin_variations["1F3FC-1F3FB"].sheet_y;
				delete data[i].skin_variations["1F3FC-1F3FB"].has_img_apple;
				delete data[i].skin_variations["1F3FC-1F3FB"].has_img_google;
				delete data[i].skin_variations["1F3FC-1F3FB"].has_img_twitter;
				delete data[i].skin_variations["1F3FC-1F3FB"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FD-1F3FB"]) {
				delete data[i].skin_variations["1F3FD-1F3FB"].image;
				delete data[i].skin_variations["1F3FD-1F3FB"].sheet_x;
				delete data[i].skin_variations["1F3FD-1F3FB"].sheet_y;
				delete data[i].skin_variations["1F3FD-1F3FB"].has_img_apple;
				delete data[i].skin_variations["1F3FD-1F3FB"].has_img_google;
				delete data[i].skin_variations["1F3FD-1F3FB"].has_img_twitter;
				delete data[i].skin_variations["1F3FD-1F3FB"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FE-1F3FB"]) {
				delete data[i].skin_variations["1F3FE-1F3FB"].image;
				delete data[i].skin_variations["1F3FE-1F3FB"].sheet_x;
				delete data[i].skin_variations["1F3FE-1F3FB"].sheet_y;
				delete data[i].skin_variations["1F3FE-1F3FB"].has_img_apple;
				delete data[i].skin_variations["1F3FE-1F3FB"].has_img_google;
				delete data[i].skin_variations["1F3FE-1F3FB"].has_img_twitter;
				delete data[i].skin_variations["1F3FE-1F3FB"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FF-1F3FB"]) {
				delete data[i].skin_variations["1F3FF-1F3FB"].image;
				delete data[i].skin_variations["1F3FF-1F3FB"].sheet_x;
				delete data[i].skin_variations["1F3FF-1F3FB"].sheet_y;
				delete data[i].skin_variations["1F3FF-1F3FB"].has_img_apple;
				delete data[i].skin_variations["1F3FF-1F3FB"].has_img_google;
				delete data[i].skin_variations["1F3FF-1F3FB"].has_img_twitter;
				delete data[i].skin_variations["1F3FF-1F3FB"].has_img_facebook;
			}

			if (data[i].skin_variations["1F3FB-1F3FC"]) {
				delete data[i].skin_variations["1F3FB-1F3FC"].image;
				delete data[i].skin_variations["1F3FB-1F3FC"].sheet_x;
				delete data[i].skin_variations["1F3FB-1F3FC"].sheet_y;
				delete data[i].skin_variations["1F3FB-1F3FC"].has_img_apple;
				delete data[i].skin_variations["1F3FB-1F3FC"].has_img_google;
				delete data[i].skin_variations["1F3FB-1F3FC"].has_img_twitter;
				delete data[i].skin_variations["1F3FB-1F3FC"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FC-1F3FC"]) {
				delete data[i].skin_variations["1F3FC-1F3FC"].image;
				delete data[i].skin_variations["1F3FC-1F3FC"].sheet_x;
				delete data[i].skin_variations["1F3FC-1F3FC"].sheet_y;
				delete data[i].skin_variations["1F3FC-1F3FC"].has_img_apple;
				delete data[i].skin_variations["1F3FC-1F3FC"].has_img_google;
				delete data[i].skin_variations["1F3FC-1F3FC"].has_img_twitter;
				delete data[i].skin_variations["1F3FC-1F3FC"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FD-1F3FC"]) {
				delete data[i].skin_variations["1F3FD-1F3FC"].image;
				delete data[i].skin_variations["1F3FD-1F3FC"].sheet_x;
				delete data[i].skin_variations["1F3FD-1F3FC"].sheet_y;
				delete data[i].skin_variations["1F3FD-1F3FC"].has_img_apple;
				delete data[i].skin_variations["1F3FD-1F3FC"].has_img_google;
				delete data[i].skin_variations["1F3FD-1F3FC"].has_img_twitter;
				delete data[i].skin_variations["1F3FD-1F3FC"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FE-1F3FC"]) {
				delete data[i].skin_variations["1F3FE-1F3FC"].image;
				delete data[i].skin_variations["1F3FE-1F3FC"].sheet_x;
				delete data[i].skin_variations["1F3FE-1F3FC"].sheet_y;
				delete data[i].skin_variations["1F3FE-1F3FC"].has_img_apple;
				delete data[i].skin_variations["1F3FE-1F3FC"].has_img_google;
				delete data[i].skin_variations["1F3FE-1F3FC"].has_img_twitter;
				delete data[i].skin_variations["1F3FE-1F3FC"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FF-1F3FC"]) {
				delete data[i].skin_variations["1F3FF-1F3FC"].image;
				delete data[i].skin_variations["1F3FF-1F3FC"].sheet_x;
				delete data[i].skin_variations["1F3FF-1F3FC"].sheet_y;
				delete data[i].skin_variations["1F3FF-1F3FC"].has_img_apple;
				delete data[i].skin_variations["1F3FF-1F3FC"].has_img_google;
				delete data[i].skin_variations["1F3FF-1F3FC"].has_img_twitter;
				delete data[i].skin_variations["1F3FF-1F3FC"].has_img_facebook;
			}

			if (data[i].skin_variations["1F3FB-1F3FD"]) {
				delete data[i].skin_variations["1F3FB-1F3FD"].image;
				delete data[i].skin_variations["1F3FB-1F3FD"].sheet_x;
				delete data[i].skin_variations["1F3FB-1F3FD"].sheet_y;
				delete data[i].skin_variations["1F3FB-1F3FD"].has_img_apple;
				delete data[i].skin_variations["1F3FB-1F3FD"].has_img_google;
				delete data[i].skin_variations["1F3FB-1F3FD"].has_img_twitter;
				delete data[i].skin_variations["1F3FB-1F3FD"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FC-1F3FD"]) {
				delete data[i].skin_variations["1F3FC-1F3FD"].image;
				delete data[i].skin_variations["1F3FC-1F3FD"].sheet_x;
				delete data[i].skin_variations["1F3FC-1F3FD"].sheet_y;
				delete data[i].skin_variations["1F3FC-1F3FD"].has_img_apple;
				delete data[i].skin_variations["1F3FC-1F3FD"].has_img_google;
				delete data[i].skin_variations["1F3FC-1F3FD"].has_img_twitter;
				delete data[i].skin_variations["1F3FC-1F3FD"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FD-1F3FD"]) {
				delete data[i].skin_variations["1F3FD-1F3FD"].image;
				delete data[i].skin_variations["1F3FD-1F3FD"].sheet_x;
				delete data[i].skin_variations["1F3FD-1F3FD"].sheet_y;
				delete data[i].skin_variations["1F3FD-1F3FD"].has_img_apple;
				delete data[i].skin_variations["1F3FD-1F3FD"].has_img_google;
				delete data[i].skin_variations["1F3FD-1F3FD"].has_img_twitter;
				delete data[i].skin_variations["1F3FD-1F3FD"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FE-1F3FD"]) {
				delete data[i].skin_variations["1F3FE-1F3FD"].image;
				delete data[i].skin_variations["1F3FE-1F3FD"].sheet_x;
				delete data[i].skin_variations["1F3FE-1F3FD"].sheet_y;
				delete data[i].skin_variations["1F3FE-1F3FD"].has_img_apple;
				delete data[i].skin_variations["1F3FE-1F3FD"].has_img_google;
				delete data[i].skin_variations["1F3FE-1F3FD"].has_img_twitter;
				delete data[i].skin_variations["1F3FE-1F3FD"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FF-1F3FD"]) {
				delete data[i].skin_variations["1F3FF-1F3FD"].image;
				delete data[i].skin_variations["1F3FF-1F3FD"].sheet_x;
				delete data[i].skin_variations["1F3FF-1F3FD"].sheet_y;
				delete data[i].skin_variations["1F3FF-1F3FD"].has_img_apple;
				delete data[i].skin_variations["1F3FF-1F3FD"].has_img_google;
				delete data[i].skin_variations["1F3FF-1F3FD"].has_img_twitter;
				delete data[i].skin_variations["1F3FF-1F3FD"].has_img_facebook;
			}

			if (data[i].skin_variations["1F3FB-1F3FE"]) {
				delete data[i].skin_variations["1F3FB-1F3FE"].image;
				delete data[i].skin_variations["1F3FB-1F3FE"].sheet_x;
				delete data[i].skin_variations["1F3FB-1F3FE"].sheet_y;
				delete data[i].skin_variations["1F3FB-1F3FE"].has_img_apple;
				delete data[i].skin_variations["1F3FB-1F3FE"].has_img_google;
				delete data[i].skin_variations["1F3FB-1F3FE"].has_img_twitter;
				delete data[i].skin_variations["1F3FB-1F3FE"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FC-1F3FE"]) {
				delete data[i].skin_variations["1F3FC-1F3FE"].image;
				delete data[i].skin_variations["1F3FC-1F3FE"].sheet_x;
				delete data[i].skin_variations["1F3FC-1F3FE"].sheet_y;
				delete data[i].skin_variations["1F3FC-1F3FE"].has_img_apple;
				delete data[i].skin_variations["1F3FC-1F3FE"].has_img_google;
				delete data[i].skin_variations["1F3FC-1F3FE"].has_img_twitter;
				delete data[i].skin_variations["1F3FC-1F3FE"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FD-1F3FE"]) {
				delete data[i].skin_variations["1F3FD-1F3FE"].image;
				delete data[i].skin_variations["1F3FD-1F3FE"].sheet_x;
				delete data[i].skin_variations["1F3FD-1F3FE"].sheet_y;
				delete data[i].skin_variations["1F3FD-1F3FE"].has_img_apple;
				delete data[i].skin_variations["1F3FD-1F3FE"].has_img_google;
				delete data[i].skin_variations["1F3FD-1F3FE"].has_img_twitter;
				delete data[i].skin_variations["1F3FD-1F3FE"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FE-1F3FE"]) {
				delete data[i].skin_variations["1F3FE-1F3FE"].image;
				delete data[i].skin_variations["1F3FE-1F3FE"].sheet_x;
				delete data[i].skin_variations["1F3FE-1F3FE"].sheet_y;
				delete data[i].skin_variations["1F3FE-1F3FE"].has_img_apple;
				delete data[i].skin_variations["1F3FE-1F3FE"].has_img_google;
				delete data[i].skin_variations["1F3FE-1F3FE"].has_img_twitter;
				delete data[i].skin_variations["1F3FE-1F3FE"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FF-1F3FE"]) {
				delete data[i].skin_variations["1F3FF-1F3FE"].image;
				delete data[i].skin_variations["1F3FF-1F3FE"].sheet_x;
				delete data[i].skin_variations["1F3FF-1F3FE"].sheet_y;
				delete data[i].skin_variations["1F3FF-1F3FE"].has_img_apple;
				delete data[i].skin_variations["1F3FF-1F3FE"].has_img_google;
				delete data[i].skin_variations["1F3FF-1F3FE"].has_img_twitter;
				delete data[i].skin_variations["1F3FF-1F3FE"].has_img_facebook;
			}

			if (data[i].skin_variations["1F3FB-1F3FF"]) {
				delete data[i].skin_variations["1F3FB-1F3FF"].image;
				delete data[i].skin_variations["1F3FB-1F3FF"].sheet_x;
				delete data[i].skin_variations["1F3FB-1F3FF"].sheet_y;
				delete data[i].skin_variations["1F3FB-1F3FF"].has_img_apple;
				delete data[i].skin_variations["1F3FB-1F3FF"].has_img_google;
				delete data[i].skin_variations["1F3FB-1F3FF"].has_img_twitter;
				delete data[i].skin_variations["1F3FB-1F3FF"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FC-1F3FF"]) {
				delete data[i].skin_variations["1F3FC-1F3FF"].image;
				delete data[i].skin_variations["1F3FC-1F3FF"].sheet_x;
				delete data[i].skin_variations["1F3FC-1F3FF"].sheet_y;
				delete data[i].skin_variations["1F3FC-1F3FF"].has_img_apple;
				delete data[i].skin_variations["1F3FC-1F3FF"].has_img_google;
				delete data[i].skin_variations["1F3FC-1F3FF"].has_img_twitter;
				delete data[i].skin_variations["1F3FC-1F3FF"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FD-1F3FF"]) {
				delete data[i].skin_variations["1F3FD-1F3FF"].image;
				delete data[i].skin_variations["1F3FD-1F3FF"].sheet_x;
				delete data[i].skin_variations["1F3FD-1F3FF"].sheet_y;
				delete data[i].skin_variations["1F3FD-1F3FF"].has_img_apple;
				delete data[i].skin_variations["1F3FD-1F3FF"].has_img_google;
				delete data[i].skin_variations["1F3FD-1F3FF"].has_img_twitter;
				delete data[i].skin_variations["1F3FD-1F3FF"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FE-1F3FF"]) {
				delete data[i].skin_variations["1F3FE-1F3FF"].image;
				delete data[i].skin_variations["1F3FE-1F3FF"].sheet_x;
				delete data[i].skin_variations["1F3FE-1F3FF"].sheet_y;
				delete data[i].skin_variations["1F3FE-1F3FF"].has_img_apple;
				delete data[i].skin_variations["1F3FE-1F3FF"].has_img_google;
				delete data[i].skin_variations["1F3FE-1F3FF"].has_img_twitter;
				delete data[i].skin_variations["1F3FE-1F3FF"].has_img_facebook;
			}
			if (data[i].skin_variations["1F3FF-1F3FF"]) {
				delete data[i].skin_variations["1F3FF-1F3FF"].image;
				delete data[i].skin_variations["1F3FF-1F3FF"].sheet_x;
				delete data[i].skin_variations["1F3FF-1F3FF"].sheet_y;
				delete data[i].skin_variations["1F3FF-1F3FF"].has_img_apple;
				delete data[i].skin_variations["1F3FF-1F3FF"].has_img_google;
				delete data[i].skin_variations["1F3FF-1F3FF"].has_img_twitter;
				delete data[i].skin_variations["1F3FF-1F3FF"].has_img_facebook;
			}

		}
	}
	return data;
}

const newData = removeObject(ogData);

// Convert to string
const jsonOutput = JSON.stringify(newData, null, 2); // pretty-printed

// Write to new file
const outputPath = path.join(__dirname, '../../data/cutExtras/esourceNew.json');
fs.writeFileSync(outputPath, jsonOutput, 'utf-8');
