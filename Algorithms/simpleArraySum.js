/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum;
        sum = ar.reduce((acc, number) => {
            return acc + number;
        }, 0);
    return sum;

}
