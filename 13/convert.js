const inputTransformer = require("../tools/inputTransformer");

const input = process.argv[2];
const output = process.argv[3];

(async () => {
    function transformer(file) {
        const lines = file.split("\n");

        const output = {};

        output.earliestTimestamp = lines[0];
        output.buses = lines[1].split(",");

        return output;
    }
    await inputTransformer(input, output, transformer);
})();
