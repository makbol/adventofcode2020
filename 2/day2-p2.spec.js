const solution = require('./day2-p2');

const input1 = require('./input1.json');
const input2 = require('./input2.json');

test('input 1', () => {
    const result = solution(input1);
    expect(result).toBe(306);
});

test('input 2', () => {
    const result = solution(input2);
    expect(result).toBe(1);
});
