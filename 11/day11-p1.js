const adjacentSeats = [
    { row: -1, col: 0 },
    { row: -1, col: +1 },
    { row: 0, col: +1 },
    { row: +1, col: +1 },
    { row: +1, col: 0 },
    { row: +1, col: -1 },
    { row: 0, col: -1 },
    { row: -1, col: -1 },
];

const OCCUPIED = "#";
const FLOOR = ".";
const EMPTY = "L";

function getAdjacentSeats(layout, seatRow, seatColumn) {
    const seats = adjacentSeats
        .map(({ row, col }) => {
            const checkedRow = layout[seatRow + row];
            if (checkedRow === undefined) {
                return null;
            }

            const checkedSeat = checkedRow[seatColumn + col];
            if (checkedSeat === undefined) {
                return null;
            }
            return checkedSeat;
        })
        .filter((s) => s);

    return seats;
}

function canBeTaken() {
    return (
        getAdjacentSeats(...arguments).filter((seat) => seat === OCCUPIED)
            .length === 0
    );
}

function canVacate() {
    return (
        getAdjacentSeats(...arguments).filter((seat) => seat === OCCUPIED)
            .length >= 4
    );
}

function layoutAsString(layout) {
    return layout.reduce((layoutString, row) => layoutString + row.join(""));
}

function compareLayouts(layoutOne, layoutTwo) {
    return layoutAsString(layoutOne) === layoutAsString(layoutTwo);
}

function checkSeat(layout, output, row, col) {
    const seat = layout[row][col];
    if (seat === FLOOR) {
        return;
    }
    if (seat === OCCUPIED && canVacate(layout, row, col)) {
        output[row][col] = EMPTY;
        return;
    }
    if (seat === EMPTY && canBeTaken(layout, row, col)) {
        output[row][col] = OCCUPIED;
    }
}

function getOccupiedCount(layout) {
    return layoutAsString(layout).match(new RegExp(OCCUPIED, "g")).length;
}

function solution(input) {
    let layout = JSON.parse(JSON.stringify(input));
    let copy;
    do {
        copy = JSON.parse(JSON.stringify(layout));
        for (let row = 0; row < layout.length; row++) {
            for (let col = 0; col < layout[row].length; col++) {
                checkSeat(copy, layout, row, col);
            }
        }
    } while (!compareLayouts(layout, copy));

    return getOccupiedCount(layout);
}

module.exports = {
    solution,
};
