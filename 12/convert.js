const inputTransformer = require("../tools/inputTransformer");

const input = process.argv[2];
const output = process.argv[3];

(async () => {
    function transformer(file) {
        const lines = file.split("\n");
        return lines.map((line) => {
            const [, action, value] = line.match(/([A-Z]{1})([0-9]{1,})/i);
            return { action, value };
        });
    }
    await inputTransformer(input, output, transformer);
})();
