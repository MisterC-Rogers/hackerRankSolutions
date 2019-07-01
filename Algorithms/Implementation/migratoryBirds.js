function migratoryBirds(arr) {
    arr = arr.sort((a, b) => a - b)
  
    let r = arr.length,
      c = 0,
      s = 0
  
    for (let i = arr.length; --i > 1;) {
      if (arr[i] > arr[i - 1]) {
        if (r - i >= c) {
          c = r - i
          s = i
        }
        r = i
      }
    }
  
    if (r >= c)
      s = 0
  
    return arr[s]
  }