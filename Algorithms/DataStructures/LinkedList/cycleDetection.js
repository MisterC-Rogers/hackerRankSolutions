function hasCycle(head) {
    if(head == null) return false;
    let i = head, j = head;
    while(j != null && j.next != null){
        i = i.next;
        j = j.next.next;
        if (j == i) return true;
    }
    return false;
}

