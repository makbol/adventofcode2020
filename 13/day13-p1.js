function getClosestBus(timestamp, bus) {
    const divisor = Math.floor(timestamp / bus);

    const c1 = divisor * bus;
    const c2 = bus * (divisor + 1);

    return c1 < timestamp ? c2 : c1;
}

function solution({ earliestTimestamp, buses }) {
    let earliestBus = [null, Number.MAX_SAFE_INTEGER];

    for (let i = 0; i < buses.length; i++) {
        const bus = buses[i];
        if (bus === "x") {
            continue;
        }
        const earliestDeparture = getClosestBus(
            parseInt(earliestTimestamp),
            parseInt(bus)
        );
        const diff1 = earliestDeparture - earliestTimestamp;
        const diff2 = earliestBus[1] - earliestTimestamp;
        if (diff1 < diff2) {
            earliestBus = [bus, earliestDeparture];
        }
    }

    return Math.abs(earliestTimestamp - earliestBus[1]) * earliestBus[0];
}

module.exports = {
    solution,
    getClosestBus,
};
