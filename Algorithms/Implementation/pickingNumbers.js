/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let curr = new Set()
    let max = 0
    for(let i = a.length; i-- > 0;){
        let count = 0 
        if(!curr.has(a[i])){
            curr.add(a[i])
            for(let j = a.length; j-- > 0;){
                if(a[j] == a[i] || a[j] == a[i] +1){
                    count++
                }
            }
        max = Math.max(max, count)
        }
    }
    return max;
}