function birthday(s, d, m) {
    let su = 0,
      c = 0
  
    for (let i = 0; i <= s.length - m; ++i) {
      su += s[i]
      for (let j = i + m; j-- > i + 1;) {
        su += s[j]
      }
  
      if (su === d)
        ++c
  
      su = 0
    }
  
    return c
  }