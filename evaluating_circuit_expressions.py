from functools import reduce

# example = '[|, 1, 0, 1, 1, 0]'
example = '[|, [&, 1, [!, 0]], [!, [|, [|, 1, 0], [!, 1]]]]'

# traverse through our expr input

# if we detect a nested subexpression
# recurse into the nested subexpression
# base case: if we've landed in an expression that doesn't contain any nested subexpressions
# just evaluate the expression just like how we've done it already
# how do we detect a nested subexpression?
# if we encounter an `[`
# recurse on that nested subexpression
# when a recursive that handles a nested subexpression returns, we need the outer scope
# to skip over the contents of the nested subexpression to avoid double counting
# how do we know when an expression is complete?
# if we encounter a `]`


def evaluate(operator, operands):
    answer = 0

    if operator == '&':
        answer = reduce(lambda a, b: a and b, operands)
        
    if operator == '|':
        answer = reduce(lambda a, b: a or b, operands)

    if operator == '!':
        answer = 1 if not operands[0] else 0

    return answer

def parse_eval(expr):

    # if we define our operators beforehand
    # we can check if any of the tokens contain an operator
    # we can also check if any of the tokens contain a 0 or 1
    # just pick those out

    # the `[` and `]` do convey meaning, it would be much more
    # useful to be able to pull them out individually
    
    operator = expr[1]
    operands = []
    
    pos = 4
    
    while expr[pos] != ']':
        # keep traversing through our string
        if expr[pos] == '[':
            # recurse, passing the recursive call the current
            # character in the string all the way to the end
            answer, length = parse_eval(expr[pos:])
            operands.append(answer)
            # update our `pos` index to move past the nested
            # subexpression
            pos += length
            
        elif expr[pos] == '0' or expr[pos] == '1':
            operands.append(int(expr[pos]))
        
        pos += 1
    
    print(evaluate(operator, operands), pos)
    return evaluate(operator, operands), pos

print(parse_eval(example)[0])
