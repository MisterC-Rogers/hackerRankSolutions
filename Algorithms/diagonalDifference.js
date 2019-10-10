/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let start = 0
    let end = arr.length
    // console.log(end)
    let leftToRight = 0
    let rightToLeft = 0
    for(let i = arr.length; i-- > 0;){
        leftToRight += arr[i][start++]
        rightToLeft += arr[i][--end]
    }
    return Math.abs(leftToRight - rightToLeft)
}