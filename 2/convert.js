const fs = require('fs').promises;
const path = require('path');

const input = process.argv[2];
const output = process.argv[3];

(async() => {
    const file = await fs.readFile(path.resolve(__dirname, input), 'utf-8');
    const lines = file.split('\n');

    const result = [];

    lines.forEach((line, ix) => {
        const matchGroups = line.match(/^([0-9]{1,2})-([0-9]{1,2})\s([a-z]{1}):\s([a-z]{1,})$/);

        result.push({
            low: parseInt(matchGroups[1]),
            high: parseInt(matchGroups[2]),
            letter: matchGroups[3],
            pass: matchGroups[4]
        });
    });

    await fs.writeFile(path.resolve(__dirname, output), JSON.stringify(result, null, 2));
})();
