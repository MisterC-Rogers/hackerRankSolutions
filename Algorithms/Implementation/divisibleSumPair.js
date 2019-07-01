function divisibleSumPairs(n, k, ar) {
    let count = 0
  
    for (let i = n; i-- > 0;) {
      for (let j = i + n; j-- > i + 1;) {
        if (((ar[i] + ar[j]) % k === 0)) {
          ++count
        }
      }
    }
  
    return count
  }