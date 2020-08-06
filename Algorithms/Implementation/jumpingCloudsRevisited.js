// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let energy = 100;
    for (let pos = c.length/k; pos-- > 0;) {
        energy -= c[pos * k] === 1 ? 3 : 1       
    }
    return energy;
}
console.log(jumpingOnClouds([0,0,1,0], 2)) // 96
console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2)) // 92
console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3)) // 94