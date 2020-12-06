const inputTransformer = require("../tools/inputTransformer");

const input = process.argv[2];
const output = process.argv[3];

(async () => {
    let passportData = [];
    function transformer(file) {
        const lines = file.split("\n");
        return lines
            .map((line) => {
                if (line) {
                    passportData.push(line);
                } else {
                    const output = passportData.join(" ");
                    passportData = [];
                    return output;
                }
            })
            .filter((line) => line);
    }
    await inputTransformer(input, output, transformer);
})();
