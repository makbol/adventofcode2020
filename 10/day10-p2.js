function solution(input) {
    let sorted = [...input].sort((a, b) => a - b);
    sorted = [0, ...sorted, sorted[sorted.length - 1] + 3];

    const ways = sorted.map((_, i) => (i === 0 ? 1 : 0));

    for (let i = 1; i < sorted.length; i++) {
        for (let j = i - 3; j < i; j++) {
            if (sorted[j] + 3 >= sorted[i]) {
                ways[i] += ways[j];
            }
        }
    }
    return ways[ways.length - 1];
}

module.exports = {
    solution,
};
