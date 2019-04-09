function insertNodeAtPosition(head, data, position) {
    let nullHead = new SinglyLinkedListNode(null);
    nullHead.next = head;
    let prev = nullHead;
    let current = head;
    let i = 0;

    while (i < position) {
        prev = current;
        current = current.next;
        i++;
    }

    prev.next = new SinglyLinkedListNode(data);
    prev.next.next = current;

    return nullHead.next;
}