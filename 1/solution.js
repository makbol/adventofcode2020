const TOTAL_SUM = 2020;

function sortLowToHigh(a, b) {
    return a - b;
}

function two(input) {
    const ascending = [...input].sort(sortLowToHigh);

    let iterations = 0;

    for(let i = 0; i < input.length; i++) {
        for(let j = input.length; j >= 0; j--) {
            let a = ascending[i];
            let b = ascending[j];
            iterations++;
            if(a + b === TOTAL_SUM) {
                return {
                    numbers: [a, b],
                    iterations,
                }
            }
        }
    }
}

function three(input) {
    const ascending = [...input].sort(sortLowToHigh);

    let iterations = 0;

    for(let i = 0; i < input.length - 2; i++) {

        const set = new Set();
        let sum = TOTAL_SUM - ascending[i];

        for(let j = i + 1; j < input.length; j++) {
            iterations++;
            if(set.has(sum - ascending[j])) {
                return {
                    numbers: [ascending[i], ascending[j], sum - ascending[j]],
                    iterations,
                }
            }
            set.add(ascending[j]);
        }
    }
}

function solution(input, number) {
    const map = {
        2: two,
        3: three
    }

    return map[number](input);
}

module.exports = solution;
