function climbingLeaderboard(scores, alice) { // best O(n + log(m)), worst O(n + m)

    let r = []
  
    for (let i = 0, p = 0, a = alice.pop(); i < scores.length; ++i) {
      let s = scores[i]
  
      if (s != scores[i - 1]) {
  
        ++p
  
        while (a >= s) {
          r.unshift(p)
          a = alice.pop()
        }
  
        if (i == scores.length - 1 && a) {
          r.unshift(...new Array(alice.length + 1).fill(++p))
        }
      }
    }
  
    return r
  }