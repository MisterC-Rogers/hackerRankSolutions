// Complete the rotLeft function below.
function rotLeft(a, d) {
    let rotate = []
    
    for(let i = a.length; i-- > 0;){
        rotate[i] = a[(i + d) % a.length]
    }
    return rotate
}