class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    print_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        console.log(result);
    }
}


const reorder = function (head) {
    if (head === null || head.next === null) return

    // find the head of second half
    let slow = head
    let fast = head
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
    }
    let head_of_second_half = slow

    head_of_second_half = reverse(head_of_second_half)

    weave(head, head_of_second_half)
}

const reverse = function (head) {
    let pre = head
    let cur = head.next
    head.next = null

    while (cur != null) {
        const next = cur.next
        cur.next = pre

        pre = cur
        cur = next
    }

    return pre
}

const weave = function (origin, second) {
    let cur = origin

    while (second !== null) {
        let next_cur = cur.next
        let next_sec = second.next

        cur.next = second
        second.next = next_cur

        cur = next_cur
        second = next_sec
    }

    cur.next = null
}


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
head.print_list()
