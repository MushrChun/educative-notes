class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

const reverse_sub_list = function (head, p, q) {
  if (p === q) return head

  let cur = head
  let pre = null

  let i = 0

  while (cur != null && i < p - 1) {
    pre = cur
    cur = cur.next

    i++
  }

  const end_of_first_part = pre
  const end_of_sec_part = cur

  i = 0

  while (cur != null && i < q - p + 1) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next

    i++
  }

  if (end_of_first_part !== null) {
    end_of_first_part.next = pre
  } else {
    head = pre
  }

  end_of_sec_part.next = cur

  return head;
};


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse_sub_list(head, 2, 4);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();