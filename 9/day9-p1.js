function checkSum(input, total) {
    const set = new Set();

    for (let i = 0; i < input.length; i++) {
        if (set.has(total - input[i])) {
            return true;
        }
        set.add(input[i]);
    }
    return false;
}

function solution(input, prev) {
    for (let i = prev; i < input.length; i++) {
        const part = input.slice(i - prev, i);
        if (!checkSum(part, input[i])) {
            return input[i];
        }
    }
}

module.exports = {
    solution,
};
