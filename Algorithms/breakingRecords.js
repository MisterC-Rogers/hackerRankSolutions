function breakingRecords(scores) {

    let l = scores[0],
      h = scores[0],
      lc = 0,
      hc = 0
  
    for (var i = 1; i < scores.length; ++i) {
      if (h < scores[i]) {
        h = scores[i]
        ++hc
      } else if (l > scores[i]) {
        l = scores[i]
        ++lc
      }
    }
  
    return [hc, lc]
  }