/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let largest = Math.max(...nums);
    let secondLargest = 0;
    for (let num of nums) {
        if (num > secondLargest && num != largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}
