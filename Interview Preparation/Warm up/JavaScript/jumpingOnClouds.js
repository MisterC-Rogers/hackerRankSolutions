// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0;
    let clouds = 0;
        while (true) {
            if (clouds + 2 < c.length && c[clouds + 2] === 0) {
                clouds+=2
            } else if (clouds + 1 < c.length) {
                clouds++
            } else {
                break
            }
            jumps++
        }
        return jumps
    }