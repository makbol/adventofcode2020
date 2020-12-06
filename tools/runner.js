const solution = require(process.argv[2]);
const input = require(process.argv[3]);

const times = [];
let result;
for (let i = 0; i < 100; i++) {
    const timeStart = process.hrtime();
    result = solution(input, process.argv[4]);
    times.push(process.hrtime(timeStart));
}

const avg = times.reduce((a, b) => a + b[1], 0) / times.length / 1000000;

console.log(result);
console.info("Avg execution time: %dms", avg);
