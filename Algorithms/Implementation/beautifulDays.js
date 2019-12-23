// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let movieDay = 0;
    for(let l = j + 1; l-- > i;){
        if (Number.isInteger((Math.abs(l - parseInt((l.toString()).split('').reverse().join('')))) / k)) {
      ++movieDay
        }
    }
    return movieDay
}