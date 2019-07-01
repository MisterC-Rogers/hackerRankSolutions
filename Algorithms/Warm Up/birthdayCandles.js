// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let max = Math.max(...ar)
    return ar.filter((candles) => candles === max).length
}