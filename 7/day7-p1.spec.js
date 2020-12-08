const { solution } = require("./day7-p1");

const input1 = require("./input1.json");
const input2 = require("./input2.json");

test("hasBag", () => {
    const bags = [
        "bright white bags contain 1 shiny gold bag.",
        "muted yellow bags contain 2 faded blue bags, 9 dark olive bags.",
        "dark olive bags contain 3 vibrant plum bags, 4 faded blue bags.",
        "vibrant plum bags contain 5 faded blue bags, 6 shiny gold bags.",
        "faded blue bags contain no other bags.",
        "dotted black bags contain no other bags.",
    ];

    expect(solution(bags, "shiny gold bag")).toBe(4);
});

test("part 1", () => {
    expect(solution(input1, "shiny gold bag")).toBe(4);
});

console.log(solution(input2, "shiny gold bag"));
