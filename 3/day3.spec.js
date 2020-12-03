const { solution, columnIterator } = require('./day3');

const input1 = require('./input1.json');
const input2 = require('./input2.json');

test('columnIterator', () => {
    const iterator = columnIterator(3, 11);

    expect(iterator.next().value).toBe(0);
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().value).toBe(6);
    expect(iterator.next().value).toBe(9);
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(4);
    expect(iterator.next().value).toBe(7);
    expect(iterator.next().value).toBe(10);
    expect(iterator.next().value).toBe(2);
});

test('part 1', () => {
    const result = solution(input1, 1, 3);
    expect(result).toBe(7);
});

console.log(solution(input2, 1, 3));


test('part 2', () => {
    expect(solution(input1, 1, 1)).toBe(2);
    expect(solution(input1, 1, 3)).toBe(7);
    expect(solution(input1, 1, 5)).toBe(3);
    expect(solution(input1, 1, 7)).toBe(4);
    expect(solution(input1, 2, 1)).toBe(2);
});

console.log(
    solution(input2, 1, 1) *
    solution(input2, 1, 3) *
    solution(input2, 1, 5) *
    solution(input2, 1, 7) *
    solution(input2, 2, 1)
);
