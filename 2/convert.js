const inputTransformer = require('../tools/inputTransformer');

const input = process.argv[2];
const output = process.argv[3];

(async() => {
    function transformer(line) {
        const matchGroups = line.match(/^([0-9]{1,2})-([0-9]{1,2})\s([a-z]{1}):\s([a-z]{1,})$/);

        return {
            low: parseInt(matchGroups[1]),
            high: parseInt(matchGroups[2]),
            letter: matchGroups[3],
            pass: matchGroups[4]
        };
    }

    await inputTransformer(input, output, transformer);
})();
