function reverse(head){
    const nextPrev = head.next;
    const nextNext = head.prev;

    head.prev = nextPrev;
    head.next = nextNext;

    if (head.prev === null) return head;
    return reverse(head.prev);
}