const TOTAL_SUM = 2020;

function sortLowToHigh(a, b) {
    return a - b;
}

module.exports = function three(input) {
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
