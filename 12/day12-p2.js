const { arrayCycle, rotate } = require("./day12-p1");

class Waypoint {
    constructor() {
        this.position = {
            N: 1,
            E: 10,
            S: 0,
            W: 0
        }

        this.vertical = ['N', 'S'];
        this.horizontal = ['W', 'E'];
    }

    move(direction, value) {
        const map = {
            'N': this.moveNorth.bind(this),
            'E': this.moveEast.bind(this),
            'S': this.moveSouth.bind(this),
            'W': this.moveWest.bind(this),
        }
        map[direction](parseInt(value));
    }

    forward(value) {
        const multiplied = Object
            .entries(this.position)
            .map(([key, v]) => ({[key]: v*value}));

        return Object.assign({}, ...multiplied);
    }

    rotate(direction, value) {
        let pairs = [
            ['NE', 'ES'],
            ['SE', 'WS'],
            ['SW', 'WN'],
            ['NW', 'EN']
        ];
        if(direction === 'L') {
            pairs = [
                ['NE', 'WN'],
                ['NW', 'WS'],
                ['SW', 'ES'],
                ['SE', 'EN']
            ]
        }
        const currentDirection = this.getCurrentDirection();

        if(currentDirection.length === 1) {
            const newDirection = rotate(direction, currentDirection, value);
            this.position[newDirection] = this.position[currentDirection];
            this.position[currentDirection] = 0;
            return;
        }

        if(currentDirection.length === 0) {
            return;
        }

        const index = pairs.findIndex(([reference]) => reference === currentDirection);
        const cycle = arrayCycle(pairs, index);

        for (let i = 0; i < value/90; i++) {
            const ix = cycle.next().value;
            const source = pairs[ix][0].split('');
            const dest = pairs[ix][1].split('');

            const sourceValues = [this.position[source[0]], this.position[source[1]]];

            this.position[dest[0]] = sourceValues[0];
            this.position[dest[1]] = sourceValues[1];

            const [toZero] = source.filter(dir => !dest.includes(dir))
            this.position[toZero] = 0;
        }
    }

    getCurrentDirection() {
        let direction = Object
            .entries(this.position)
            .filter(([, value]) => value)
            .map(([key]) => key)
            .join('');

        if(direction.length < 2) {
            return direction;
        }

        const [, vertical, horizontal] = direction.match(/(?=.*(N|S))(?=.*(W|E))/);
        return vertical + horizontal;
    }

    doMove(plane, value) {
        if(this.position[plane[1]] === 0) {
            this.position[plane[0]] += value;
        } else if(this.position[plane[1]] >= value) {
            this.position[plane[1]] -= value;
        } else {
            const diff = value - this.position[plane[1]];
             this.position[plane[0]] += diff;
             this.position[plane[1]] = 0;
        }
    }

    moveNorth(value) {
        this.doMove(this.vertical, value)
    }

    moveSouth(value) {
        this.doMove(Array.from(this.vertical).reverse(), value)
    }

    moveWest(value) {
        this.doMove(this.horizontal, value);
    }

    moveEast(value) {
        this.doMove(Array.from(this.horizontal).reverse(), value);
    }
}


function solution(input) {
    const waypoint = new Waypoint();
    const shipPosition = {
        N: 0,
        S: 0,
        E: 0,
        W: 0,
    };

    for (let i = 0; i < input.length; i++) {
        const { action, value } = input[i];
        if (action === "R" || action === "L") {
            waypoint.rotate(action, parseInt(value));
            continue;
        }
        if (action === "F") {
            const result = waypoint.forward(parseInt(value));
            Object.keys(shipPosition).forEach(key => {
                shipPosition[key] += result[key]
            });
            continue;
        }
        waypoint.move(action, parseInt(value));
    }
    return (
        Math.abs(shipPosition.W - shipPosition.E) + Math.abs(shipPosition.N - shipPosition.S)
    );
}

module.exports = {
    solution, Waypoint
};
