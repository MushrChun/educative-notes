class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const find_cycle_start = function (head) {
    let slow = head
    let fast = head
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) break
    }
    let len = 0
    let cur = slow
    while (true) {
        cur = cur.next
        len++
        if (cur === slow) break
    }

    slow = head
    fast = head
    for (let i = 0; i < len; i++) {
        fast = fast.next
    }

    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)
