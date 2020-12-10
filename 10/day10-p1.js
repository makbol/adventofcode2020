function solution(input) {
    const sorted = [...input].sort((a, b) => a - b);
    let current = 0;

    const differences = [];

    for (let i = 0; i < input.length; i++) {
        differences.push(sorted[i] - current);
        current = sorted[i];
    }

    const ones = differences.filter((v) => v === 1);
    const threes = differences.filter((v) => v === 3);

    return ones.length * (threes.length + 1);
}

module.exports = {
    solution,
};
