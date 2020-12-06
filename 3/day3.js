function* columnIterator(jump, limit) {
    let start = 0;
    while (true) {
        yield start;

        if (limit - start <= jump) {
            start = jump - (limit - start);
        } else {
            start += jump;
        }
    }
}

function solution(input, rowIncrement, columnIncrement) {
    let trees = 0;
    const TREE = "#";

    const iterator = columnIterator(columnIncrement, input[0].length);

    for (let row = 0; row < input.length; row += rowIncrement) {
        const column = iterator.next().value;
        if (input[row][column] === TREE) {
            trees++;
        }
    }

    return trees;
}

module.exports.columnIterator = columnIterator;
module.exports.solution = solution;
