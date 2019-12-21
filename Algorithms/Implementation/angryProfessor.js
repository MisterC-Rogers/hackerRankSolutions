// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    let onTime = k;
    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            --onTime
        }
    }
    return onTime <= 0 ? "NO" : "YES"
}

console.log(angryProfessor(4, [ -1, -1, 0, 0, 1, 1 ]))
console.log(angryProfessor(5, [ -1, -1, 0, 0, 1, 1 ]))
console.log(angryProfessor(3, [ -1, -3, 4, 2 ]))
console.log(angryProfessor(2, [ 0, -1, 2, 1 ]))