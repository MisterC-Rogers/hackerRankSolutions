var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  // your code here
    if (firstName in customerData) {
        if (customerData[firstName].visits === 1) {
            return `Welcome back, ${firstName}! We're glad you liked us the first time!`
        }
        if (customerData[firstName].visits > 1) {
            return `Welcome back, ${firstName}! So glad to see you again!`
        }
    }
    return `Welcome! Is this your first time?`
}

console.log(greetCustomer('Joe'));
console.log(greetCustomer('Jeff'));
console.log(greetCustomer('Carrie'));