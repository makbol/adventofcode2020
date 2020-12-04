const { solution, areFieldsValid, fields } = require('./day4');

const input1 = require('./input1.json');
const input2 = require('./input2.json');

const invalidPassports = require('./invalid-passports.json');
const validPassports = require('./valid-passports.json');

test('part 1', () => {
    expect(solution(input1, false)).toBe(2);
});

test('fields validators', () => {
    expect(fields.byr('2002')).toBeTruthy();
    expect(fields.byr('2003')).toBeFalsy();
    expect(fields.hgt('60in')).toBeTruthy();
    expect(fields.hgt('190cm')).toBeTruthy();
    expect(fields.hgt('190in')).toBeFalsy()
    expect(fields.hgt('190')).toBeFalsy()
    expect(fields.hcl('#123abc')).toBeTruthy();
    expect(fields.hcl('#123abz')).toBeFalsy();
    expect(fields.hcl('123abc')).toBeFalsy();
    expect(fields.ecl('brn')).toBeTruthy();
    expect(fields.ecl('wat')).toBeFalsy();
    expect(fields.pid('000000001')).toBeTruthy();
    expect(fields.pid('0123456789')).toBeFalsy();
});

test('areFieldsValid', () => {
    invalidPassports.forEach(passport => {
        expect(areFieldsValid(passport)).toBeFalsy();
    });
    validPassports.forEach(passport => {
        expect(areFieldsValid(passport)).toBeTruthy();
    });
});

console.log(solution(input2, false));
console.log(solution(input2, true));
