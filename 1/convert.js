const inputTransformer = require("../tools/inputTransformer");

const input = process.argv[2];
const output = process.argv[3];

(async () => {
    function transformer(file) {
        const lines = file.split("\n");
        return lines.map(parseInt);
    }
    await inputTransformer(input, output, transformer);
})();
