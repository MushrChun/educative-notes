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


const reverse_every_k_elements = function (head, k) {
  let pre = null
  let cur = head

  let end_of_pre = pre
  let end_of_cur = cur

  while (cur !== null) {
    let i = 0

    while (cur !== null && i < k) {
      const next = cur.next
      cur.next = pre

      pre = cur
      cur = next

      i++
    }

    if (end_of_pre !== null) {
      end_of_pre.next = pre
    } else {
      head = pre
    }

    end_of_cur.next = cur

    end_of_pre = end_of_cur
    end_of_cur = cur
  }

  return head
}


const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse_every_k_elements(head, 3);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();