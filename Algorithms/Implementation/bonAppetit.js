function bonAppetit(bill, k, b) {
    let s = 0
    for (let i = bill.length; i-- > 0;)
      if (i != k)
        s += bill[i]
  
    s = b - s / 2
  
    console.log(s == 0 ? 'Bon Appetit' : s)
  }