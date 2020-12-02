const inputTransformer = require('../tools/inputTransformer');

const input = process.argv[2];
const output = process.argv[3];

(async() => {
    function transformer(val) {
        return parseInt(val);
    }

    await inputTransformer(input, output, transformer);
})();
