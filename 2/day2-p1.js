function solution(input) {
    let totalValid = 0;

    input.forEach(({ pass, letter, high, low }) => {
        const regex = new RegExp(letter, "g");
        const matches = pass.match(regex);

        if (!matches) {
            return;
        }

        if (matches.length >= low && matches.length <= high) {
            totalValid++;
        }
    });

    return totalValid;
}

module.exports = solution;
