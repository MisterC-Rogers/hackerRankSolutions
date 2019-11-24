function pairs(k, arr) {
    arr = arr.sort((a,b) => b - a)
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] - arr[j] === k) {
                count++
                break
            }
        }
    }
    return count
}