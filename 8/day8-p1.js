function solution(instructions) {
    let acc = 0;
    const executions = new Array(instructions.length).fill(0);

    for (let i = 0; i < instructions.length; i++) {
        const [instruction, value] = instructions[i].split(" ");
        if (executions[i] < 1) {
            executions[i]++;
            if (instruction === "acc") {
                acc += parseInt(value);
            }
            if (instruction === "jmp") {
                i += parseInt(value) - 1;
            }
        } else {
            return acc;
        }
    }
}

module.exports = {
    solution,
};
