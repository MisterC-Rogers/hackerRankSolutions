function substrCount(n, s) {
    const m = [];
    let answer = 0, char = null, lc = 1;
    for (let i = 0; i < n; i++) {
        if (char === s[i]) {
            lc++;
        } else {
            if (char !== null) m.push([char, lc]);
            char = s[i];
            lc = 1;
        }
    }
    m.push([char, lc]);

    for (let i = 0, ml = m.length; i < ml; i++) {
        answer += Math.floor(m[i][1] * (m[i][1] + 1) / 2);
        if (i === 0 || i === ml - 1) continue;
        if (m[i][1] === 1 && m[i-1][0] === m[i+1][0]) {
            answer += Math.min(m[i - 1][1], m[i + 1][1]);
        }      
    }
    return answer;
}

console.log(substrCount(5,'asasd'));
console.log(substrCount(7,'abcbaba'));
console.log(substrCount(4,'aaaa'));
//test case 8 takes some time because the Expected Output is 1307338 but it will pass