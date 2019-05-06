function formingMagicSquare(s) {
  
    function magicSquaresOfOrder3() {
      function f(a, b) {
        // Édouard Lucas general formula for order 3 magic squares
        let c = 5
        return [
          [c - b, c + (a + b), c - a],
          [c - (a - b), c, c + (a - b)],
          [c + a, c - (a + b), c + b]
        ]
      }
  
      return [
        f(-1, -3),
        f(-3, -1),
        f(-1, 3),
        f(-3, 1),
        f(1, 3),
        f(3, 1),
        f(3, -1),
        f(1, -3)
      ]
    }
  
    let m = magicSquaresOfOrder3()
    let min = 45
  
    for (let i = m.length; i-- > 0;) {
      let c = 0
      for (let j = 3; j-- > 0;) {
        for (let k = 3; k-- > 0;) {
          c += Math.abs(s[j][k] - m[i][j][k])
        }
      }
  
      if (min > c) {
        min = c
      }
    }
  
    return min
  }