function processData(input) {
    //Enter your code here
    let even = (arr) => arr.filter((v,i) => i % 2 === 0)
    let odd = (arr) => arr.filter((v,i) => i % 2 !== 0)
    input = input.split`\n`.slice(1)
    input.map(v => console.log(even([...v]).join``, odd([...v]).join``))
}