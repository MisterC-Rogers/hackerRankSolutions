function commonChild(s1, s2) {
    if(s1.length !== s2.length){
        return('The two string are not the same Length')
    } else {
        let f = [];
        for (let i = 0, j = 0; i < s1.length, j< s2.length; i++, j++) {
            f.push(new Array(s2.length).fill(0))
            if (s1[i] === s2[0] || s1[0] === s2[0]) f[i][0] = 1;
            if (s2[j] === s1[0] || s1[0] === s2[0]) f[0][j] = 1;
        }
        for (let i = 1; i < s1.length; i++) {
            for (let j = 1; j < s2.length; j++) {
                if (s1[i] === s2[j]) f[i][j] = f[i - 1][j - 1] + 1;
                else f[i][j] = Math.max(f[i - 1][j - 1], f[i][j - 1], f[i - 1][j]);
            }
        }
        return f[s1.length - 1][s2.length - 1];
    }
}

console.log(commonChild('HARRY', 'SALLY'));
console.log(commonChild('AA', 'BB'));
console.log(commonChild('SHINCHAN', 'NOHARAAA'));
