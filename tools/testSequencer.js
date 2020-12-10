const Sequencer = require("@jest/test-sequencer").default;

class CustomSequencer extends Sequencer {
    sort(tests) {
        const copyTests = Array.from(tests);

        const fileNameRegex = /(day([0-9]{1,2}))(-p([0-9]{1,2}))?/i;

        return copyTests.sort((a, b) => {
            let [, , dayNumberA, , partNumberA] = a.path.match(fileNameRegex);
            let [, , dayNumberB, , partNumberB] = b.path.match(fileNameRegex);

            dayNumberA = parseInt(dayNumberA);
            dayNumberB = parseInt(dayNumberB);
            partNumberA = parseInt(partNumberA);
            partNumberB = parseInt(partNumberB);

            return dayNumberA === dayNumberB
                ? partNumberB - partNumberA
                : dayNumberB - dayNumberA;
        });
    }
}

module.exports = CustomSequencer;
