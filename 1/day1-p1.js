const TOTAL_SUM = 2020;

function sortLowToHigh(a, b) {
    return a - b;
}

module.exports = function two(input) {
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
