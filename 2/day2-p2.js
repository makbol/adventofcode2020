function solution(input) {
    let totalValid = 0;

    input.forEach(({ pass, letter, high, low }) => {
        let matchInPass = 0;

        if (pass.charAt(low - 1) === letter) {
            matchInPass++;
        }

        if (pass.charAt(high - 1) === letter) {
            matchInPass++;
        }

        if (matchInPass === 1) {
            totalValid++;
        }
    });
    return totalValid;
}

module.exports = solution;
