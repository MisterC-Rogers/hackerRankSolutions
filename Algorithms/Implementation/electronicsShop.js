function getMoneySpent(keyboards, drives, b) {
    keyboards = keyboards.sort((a, b) => a - b)
    drives = drives.sort((a, b) => b - a)
  
    let m = -1,
        i = keyboards.length,
        j = drives.length
  
    while(i-- > 0) {
      while(j >= 0) {
        let v = keyboards[i] + drives[j]
  
        if (v > b)
          break
        else if (v > m)
          m = v
  
        --j
      }
    }
  
    return m
  }