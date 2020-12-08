function buildStructure(input) {
    const bags = {};

    for (let i = 0; i < input.length; i++) {
        const [name, contents] = input[i].split(" contain ");
        const contentsRegex = /([0-9]|no)\s([a-z\s]{1,})/gi;
        const contentRegex = /([0-9]{1,}|no)\s([a-z\s]{1,})/i;
        const possibleContents = contents.match(contentsRegex);

        bags[name.slice(0, name.length - 1)] = Object.assign(
            {},
            ...possibleContents.map((content) => {
                let [, quantity, contentName] = content.match(contentRegex);

                if (contentName.charAt(contentName.length - 1) === "s") {
                    contentName = contentName.slice(0, contentName.length - 1);
                }

                return quantity === "no"
                    ? {}
                    : {
                          [contentName]: parseInt(quantity),
                      };
            })
        );
    }

    return bags;
}

function hasBag(list, search, current) {
    const contents = Object.keys(list[current]);
    if (contents.length) {
        return contents.includes(search)
            ? true
            : contents.filter((content) => hasBag(list, search, content))
                  .length;
    }
}

function solution(input, bag) {
    const bags = buildStructure(input);

    let counter = 0;

    for (let key in bags) {
        if (hasBag(bags, bag, key)) {
            counter++;
        }
    }

    return counter;
}

module.exports = {
    solution,
    buildStructure,
};
