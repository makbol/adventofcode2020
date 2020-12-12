function* arrayCycle(arr, start) {
    let i = start;
    const max = arr.length;

    while (true) {
        if (i < max) {
            yield i;
        } else {
            i = 0;
            yield i;
        }
        i++;
    }
}

function rotate(direction, startDirection, value) {
    const directionsToRight = ["N", "E", "S", "W"];
    const directionsToLeft = ["N", "W", "S", "E"];

    const arr = direction === "R" ? directionsToRight : directionsToLeft;
    const startIndex = arr.indexOf(startDirection);
    const index = value / 90;
    const cycle = arrayCycle(arr, startIndex);

    let output;
    for (let i = 0; i < index + 1; i++) {
        output = cycle.next().value;
    }

    return arr[output];
}

function solution(input) {
    const position = {
        N: 0,
        S: 0,
        E: 0,
        W: 0,
    };

    let currentDirection = "E";

    for (let i = 0; i < input.length; i++) {
        const { action, value } = input[i];
        if (action === "R" || action === "L") {
            currentDirection = rotate(action, currentDirection, value);
            continue;
        }
        if (action === "F") {
            position[currentDirection] += parseInt(value);
            continue;
        }
        position[action] += parseInt(value);
    }
    return (
        Math.abs(position.W - position.E) + Math.abs(position.N - position.S)
    );
}

module.exports = {
    solution,
    arrayCycle,
    rotate,
};
