// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    function count(s, t, tree, arr) {
    let count = 0

    for (let i = arr.length; i-- > 0;) {
      let dropZone = tree + arr[i]
      if (dropZone >= s && dropZone <= t) {
        ++count
      }
    }
    return count
  }

  console.log(count(s, t, a, apples))
  console.log(count(s, t, b, oranges))
}