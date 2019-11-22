function maxMin(k, arr) {
    arr = arr.sort((a, b) => a - b);
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < arr.length; i++ , k++)
        if ((arr[k-1] - arr[i]) < min) min = arr[k-1] - arr[i]
    return min
}