const fs = require('fs').promises;
const path = require('path');


module.exports = async function (input, output, transformer) {
    const file = await fs.readFile(path.resolve(__dirname, input), 'utf-8');

    const lines = file.split('\n');
    const result = lines.map(transformer);

    await fs.writeFile(path.resolve(__dirname, output), JSON.stringify(result, null, 2));
}
