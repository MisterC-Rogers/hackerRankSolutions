// Completed the utopianTree function with a for loop
function utopianTree(n) {
    let height = 1;
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            height++;
        } else {
            height *= 2;
        }
    }
    return height;
}

console.log(utopianTree(3));
console.log(utopianTree(4));
console.log(utopianTree(5));

// Completed with regex
// function utopianTree(n){
//     return ~(~1 << (n >> 1)) << n % 2
// }