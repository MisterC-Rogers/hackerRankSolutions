// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let alicePoint = 0 
    let bobPoint = 0
    
    for(let i = a.length; i-- > 0;){
        if(a[i] > b[i]){
            alicePoint++
        } else if(a[i] < b[i]){
            bobPoint++
        }
    }
    return [alicePoint, bobPoint]
}