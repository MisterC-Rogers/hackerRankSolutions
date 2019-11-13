evaluate = (operator, operands) => {
    let answer = 0 

    if(operator == "&"){
        answer = operands.reduce((a, b) => a && b)
    }

    if(operator == "|"){
        answer = operands.reduce((a, b) => a || b)
    }

    if(operator == "!"){
        answer = !operands[0] ? 1 : 0
    }

    console.log(answer)

    return answer
}

function parse_eval(expr){
    console.log(expr);
    let operator = expr[1]
    let operands = []
    let pos = 4

    while(expr[pos] !== ']'){
        if(expr[pos] === '['){
            let subStr = expr.slice(pos,expr.length)
            console.log(subStr)
            let [answer, length] = parse_eval(subStr)
            operands.push(answer)
            pos += length
        } else if(expr[pos] == '0' || expr[pos] == '1'){
            operands.push(parseInt(expr[pos]))
        }
        pos += 1
    }
    return [evaluate(operator,operands), pos]
}


// console.log(parse_eval('[|, 1, 0]')); // should print 1
// console.log(parse_eval('[|, 0, 0]')); // should print 0
// console.log(parse_eval('[&, 1, 1]')); // should print 1
// console.log(parse_eval('[&, 0, 1]')); // should print 0
// console.log(parse_eval('[!, 0]')); // should print 1
// console.log(parse_eval('[!, 1]')); // should print 0


// console.log(parse_eval('[|, [&, 1, [!, 0]], [!, [|, [|, 1, 0], [!, 1]]]]')); //should print 1
// console.log(parse_eval('[|, [&, 1, [!, 0]], 0]')); // should print 1
console.log(parse_eval('[|, [&, 1, [!, 1]], 0]')); // should print 0