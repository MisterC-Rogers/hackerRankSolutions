function sortedInsert(head, data) {
    let newNode = new DoublyLinkedListNode(data)
// if no list 
    if(head == null){
         return newNode
    }
// insert at the fornt
    else if(data <= head.data){
        newNode.next = head
        head.prev = newNode
        return newNode
    } 
// work thru the list     
    else {
    // Work list with 2 pointers (code is cleaner & faster than using just 1 pointer)
        let node1 = null;
        let node2 = head;
        while (node2 != null && node2.data < data) {
            node1 = node2;
            node2 = node2.next;
        }
        
        if (node2 == null) { 
        // insert at end of list
            node1.next = newNode;
            newNode.prev = node1;
        } else { 
        // insert somewhere within the list
            node1.next = newNode;
            node2.prev = newNode;
            newNode.prev = node1;
            newNode.next = node2;
        }
        return head;
    }
}