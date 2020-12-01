const solution = require('./solution');

const input1 = require('./input1');
const input2 = require('./input2');

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0)
}

test('part 1, input 1', () => {
    const result = solution(input1, 2);
    expect(sum(result.numbers)).toBe(2020);
});

test('part 1, input 2', () => {
    const result = solution(input2, 2);
    expect(sum(result.numbers)).toBe(2020);
});

test('part 2, input 1', () => {
    const result = solution(input1, 3);
    expect(sum(result.numbers)).toBe(2020);
});

test('part 2, input 2', () => {
    const result = solution(input2, 3);
    expect(sum(result.numbers)).toBe(2020);
});
