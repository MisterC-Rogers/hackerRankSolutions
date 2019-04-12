function findMergeNode(headA, headB) {
let headA_curr = headA;
let headB_curr = headB;
    while(headA_curr !== headB_curr){
        if(headA_curr.next === null){
            headA_curr = headB;
        }else{
            headA_curr = headA_curr.next;
        }

        if(headB_curr.next === null){
            headB_curr = headA;
        }else{
            headB_curr = headB_curr.next;
        }
    }
return headA_curr.data;
}