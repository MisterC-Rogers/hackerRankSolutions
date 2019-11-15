// Complete the encryption function below.
function encryption(s) {
    let result = ""

    let rows = Math.floor(Math.sqrt(s.length))
    let cols;
    if(Math.ceil(Math.sqrt(s.length)) == parseInt(rows)){
        cols = parseInt(rows)
    } else {
        cols = parseInt(rows) + 1
    }

    for ( let i = 0; i < cols; i++) {
        let p = i
        while(p < s.length){
            result += s[p]
            p += cols
        }
        result += ' '
    }

    return result;

}