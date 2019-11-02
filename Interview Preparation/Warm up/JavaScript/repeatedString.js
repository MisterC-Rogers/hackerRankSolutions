// Complete the repeatedString function below.
function repeatedString(s, n) {
    let count = 0;
    let repititions = Math.floor(n / s.length);

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "a") {
            count += 1;
        }
    }
    count = count * repititions;

    for (let i = 0; i < n % s.length; i++) {
        if (s[i] == "a") {
            count += 1;
        }
    }

    return count;
}
