const { buildStructure } = require("./day7-p1");

function count(list, current) {
    const contents = Object.keys(list[current]);
    if (contents.length) {
        return contents.reduce((acc, key) => {
            const numberOfBags = count(list, key);
            const multiplier = list[current][key];
            return acc + multiplier + multiplier * numberOfBags;
        }, 0);
    } else {
        return 0;
    }
}

function solution(input, bag) {
    const bags = buildStructure(input);
    return count(bags, bag);
}

module.exports = solution;
