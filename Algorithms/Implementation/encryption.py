import math
# Complete the encryption function below.
def encryption(s):
    s = s.replace(" ", "")
    sqr = len(s) ** 0.5  # which is square root
    col = int(sqr) if math.ceil(sqr) == int(sqr) else int(sqr)+1

    word = ''
    for i in range(col):
        p = i
        while p < len(s):
            word = word + s[p]
            p += col
        word = word + ' '

    return word