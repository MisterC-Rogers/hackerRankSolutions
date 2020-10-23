var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

function transformEmployeeData(employeeData) {
  // your code here
    const result = []
    for (let i = 0; i < employeeData.length; i++){
        const object = {}
      for (let j = 0; j < employeeData[i].length; j++) {
          let key = employeeData[i][j][0];
          let value = employeeData[i][j][1]
          object[key] = value
        }
        result.push(object)
    }
    return result;
}

console.log(transformEmployeeData(input));