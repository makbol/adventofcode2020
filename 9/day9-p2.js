function solution(input, sum) {
    let currentSum = input[0];
    let start = 0;

    for (let i = 1; i < input.length; i++) {
        while (currentSum > sum && start < i - 1) {
            currentSum = currentSum - input[start];
            start++;
        }
        if (currentSum === sum) {
            const part = input.slice(start, i - 1);
            return Math.min(...part) + Math.max(...part);
        }
        currentSum = currentSum + input[i];
    }
}

module.exports = {
    solution,
};
