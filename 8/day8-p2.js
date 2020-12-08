class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }
    equal(n1, n2) {
        return n1.data.index === n2.data.index;
    }
}

function buildList(list) {
    const executions = new Array(list.length).fill(0);
    const ll = new LinkedList();

    for (let i = 0; i < list.length; i++) {
        const [instruction, value] = list[i].split(" ");
        if (executions[i] < 2) {
            ll.add({
                instruction,
                value,
                index: i,
            });
            executions[i]++;
            if (instruction === "jmp") {
                i += parseInt(value) - 1;
            }
        } else {
            return ll;
        }
    }
}

function solution(instructions) {
    const list = buildList(instructions);
    let fast = list.head.next,
        slow = list.head;
    let found;

    while (true) {
        if (list.equal(slow, fast)) {
            found = slow;
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    let tryAgain = true;
    let acc = 0;

    while (tryAgain) {
        const instructionsCopy = [...instructions];
        while (found.data.instruction === "acc") {
            found = found.prev;
        }

        if (found.data.instruction === "nop") {
            instructionsCopy[found.data.index] = "jmp " + found.data.value;
        }
        if (found.data.instruction === "jmp") {
            instructionsCopy[found.data.index] = "nop " + found.data.value;
        }

        acc = 0;
        const executions = new Array(instructionsCopy.length).fill(0);
        for (let i = 0; i < instructionsCopy.length; i++) {
            const [instruction, value] = instructionsCopy[i].split(" ");
            if (executions[i] < 1) {
                executions[i]++;
                if (instruction === "acc") {
                    acc += parseInt(value);
                }
                if (instruction === "jmp") {
                    i += parseInt(value) - 1;
                }
                tryAgain = false;
            } else {
                tryAgain = true;
                break;
            }
        }
        found = found.prev;
    }
    return acc;
}

module.exports = {
    solution,
};
