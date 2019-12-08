var maxSlidingWindow = function(nums, k) {
    const result = [];
    if (nums.length == 0) return result;
    const deque = [];
    const add = n => {
      while(deque.length > 0 &&  n > deque[deque.length - 1]){
        deque.pop();
      }
      deque.push(n);
    }
    const remove = n => {
      if ( n == deque[0]) {
        deque.shift();
      } 
    }
    let j = 0;
    nums.forEach((n, index) => {
      add(n);
      if(index >= (k -1)){
        result.push(deque[0]);
        remove(nums[j]);
        j++;
      }
    });
    return result;
  };