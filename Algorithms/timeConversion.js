/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let hour = parseInt(s.slice(0, 2))
    // console.log(hour)
    let timeOf = s.slice(8,10)
    // console.log(timeOf)
    let minSec = s.slice(2, 8)
    // console.log(minSec)
    if(timeOf === 'PM'){
        hour += hour !== 12 ? 12 : 0
    } else if(hour === 12){
        hour = 0
    }

    return(hour > 9 ? hour : '0' + hour) + minSec
}