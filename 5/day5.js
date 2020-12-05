function solution(code) {
    const row = code.slice(0, 7);
    const column = code.slice(7, code.length);

    let front = 0;
    let back = 127;

    for(let i = 0; i < row.length; i++) {
        if(row[i] === 'F') {
            back = back - Math.floor((back - front)/2) - 1;
        }
        if(row[i] === 'B') {
            front = front + Math.floor((back - front)/2) + 1;
        }
    }

    let left = 0;
    let right = 7;

    for(let j = 0; j < column.length; j++) {
        if(column[j] === 'L') {
            right = right - Math.floor((right - left)/2) - 1;
        }
        if(column[j] === 'R') {
            left = left + Math.floor((right - left)/2) + 1;
        }
    }

    return front * 8 + left;
}

function getMissingSeat(input) {
    const seats = input
        .map(solution)
        .sort((a, b) => a - b);

    for(let i = 1; i < seats.length; i++) {
        if(seats[i] - seats[i-1] > 1) {
            return seats[i] -  1;
        }
    }
}

module.exports.solution = solution;
module.exports.getMissingSeat = getMissingSeat;
