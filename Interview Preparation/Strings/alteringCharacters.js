function alternatingCharacters(s) {
    let del = 0;
    s.split(``).map((v, i, arr) => v === arr[i + 1] ? del++ : v)
    return del
}

console.log(alternatingCharacters('AAAA')) // <= 3
console.log(alternatingCharacters('BBBBB')) // <= 4
console.log(alternatingCharacters('ABABABAB')) // <= 0
console.log(alternatingCharacters('BABABA')) // <= 0
console.log(alternatingCharacters('AAABBB')) // <= 4