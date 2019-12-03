function isValid(s) {
    const counter = {}
    s.split``.map(v => counter[v] = counter[v] ? counter[v] + 1 : 1)
    let smallValue = 0;
    let allowedTimes = 0;
    for (let key in counter) {
        if (smallValue === 0) {
            smallValue = counter[key];
            continue;
        }

        if (smallValue !== counter[key]) {
            if (counter[key] === 1) {
                allowedTimes += 1;
            } else {
                allowedTimes += Math.abs(smallValue - counter[key]);
            }
        }

        if (allowedTimes > 1) {
            break;
        }
    }

    return allowedTimes > 1 ? 'NO' : "YES";
}

console.log(isValid('aabbcd'));
console.log(isValid('aabbccddeefghi'));
console.log(isValid('abcdefghhgfedecba'));

