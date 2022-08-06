class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


def reorder(head):
    if head is None or head.next is None:
        return True

    # find middle of the LinkedList
    slow, fast = head, head
    while (fast is not None and fast.next is not None):
        slow = slow.next
        fast = fast.next.next

    head_second_half = reverse(slow)
    head_first_half = head

    while (head_first_half is not None and head_second_half is not None):
        tmp = head_first_half.next
        head_first_half.next = head_second_half
        head_first_half = tmp

        tmp = head_second_half.next
        head_second_half.next = head_first_half
        head_second_half = tmp

    if head_first_half is not None:
        head_first_half.next = None

    return head


def reverse(head):
    prev = None
    while (head is not None):
        next = head.next
        head.next = prev
        prev = head
        head = next
    return prev


def main():
    head = Node(1)
    head.next = Node(2)
    head.next.next = Node(6)
    head.next.next.next = Node(4)
    head.next.next.next.next = Node(2)

    reorder(head)


main()
