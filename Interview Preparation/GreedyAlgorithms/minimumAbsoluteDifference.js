function minimumAbsoluteDifference(arr) {
    if (arr.length !== new Set(arr).size) return 0;
    arr = arr.sort((a, b) => a - b)
    let diff = 100000000;
    for (let i = 1; i < arr.length; ++i) {
        if (Math.abs(arr[i - 1] - arr[i]) < diff) diff = Math.abs(arr[i - 1] - arr[i])
    }
    return diff
}
console.log(minimumAbsoluteDifference([3,-7,0]));
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]));
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]));