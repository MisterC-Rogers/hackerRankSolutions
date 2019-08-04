function catAndMouse(x, y, z) {
    let a = Math.abs(z - x),
        b = Math.abs(z - y)
    
    return a - b == 0 ? 'Mouse C' : (a < b ? 'Cat A' : 'Cat B')
  }