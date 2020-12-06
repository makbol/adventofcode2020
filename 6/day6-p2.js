function solution(input) {
    let numOfQuestions = 0;

    for (let i = 0; i < input.length; i++) {
        const questions = {};
        input[i].forEach((answers) => {
            answers.split("").forEach((answer) => {
                questions[answer] = questions[answer]
                    ? questions[answer] + 1
                    : 1;
            });
        });

        for (let q in questions) {
            if (questions[q] === input[i].length) {
                numOfQuestions++;
            }
        }
    }

    return numOfQuestions;
}

module.exports = solution;
