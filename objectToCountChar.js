function countAllCharacters(str) {
  // your code here
    var object = {};
    var string = str.split('');
    string.forEach((key) => {
        if (key in object) {
            object[key] += 1
        } else {
            object[key] = 1
        }
    })
    return object
}

console.log(countAllCharacters('happy'))
