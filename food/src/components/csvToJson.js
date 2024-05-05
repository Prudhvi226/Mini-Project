const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'food items-2 (3).csv';
const outputFile = 'food items-2 (3).json';

const jsonArray = [];

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        jsonArray.push(row);
    })
    .on('end', () => {
        const jsonData = JSON.stringify(jsonArray, null, 2);
        fs.writeFileSync(outputFile, jsonData);
        console.log(`Conversion successful. JSON data written to ${outputFile}`);
    });
