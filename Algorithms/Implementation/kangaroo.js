// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    //while true 
    while (!((x1 < x2 && v1 <= v2) || (x1 > x2 && v1 >= v2))) {
        //check 
        if (x1 === x2) {
        return 'YES'
        }

        x1 += v1
        x2 += v2
    }
    return 'NO'

}