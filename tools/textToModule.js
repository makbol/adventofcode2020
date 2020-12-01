const fs = require('fs').promises;
const path = require('path');

const input = process.argv[2];
const output = process.argv[2];

(async() => {
    const file = await fs.readFile(path.resolve(__dirname, input), 'utf-8');
    const lines = file.split('\n');

    lines.forEach((val, ix) => {
        lines[ix] = parseInt(val);
    });

    await fs.writeFile(path.resolve(__dirname, output), JSON.stringify(lines, null, 2));
})();
