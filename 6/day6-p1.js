function solution(input) {
    let numOfQuestions = 0;

    for(let i = 0; i < input.length; i++) {
        const questions = new Set();
        input[i].forEach(answers => {
            answers.split('').forEach(answer => questions.add(answer));
        })
        numOfQuestions += questions.size;
    }

    return numOfQuestions;
}

module.exports = solution;
