const inputTransformer = require("../tools/inputTransformer");

const input = process.argv[2];
const output = process.argv[3];

(async () => {
    let group = [];
    function transformer(file) {
        const lines = file.split("\n");
        return lines
            .map((line) => {
                if (line) {
                    group.push(line);
                } else {
                    const copy = [...group];
                    group = [];
                    return copy;
                }
            })
            .filter((line) => line);
    }
    await inputTransformer(input, output, transformer);
})();
