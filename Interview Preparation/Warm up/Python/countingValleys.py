# Complete the countingValleys function below.
def countingValleys(n, s):
    current_level = 0
    count = 0
    for i in range(n):
        if s[i] == 'U':
            current_level += 1
        elif s[i] == 'D':
            current_level -= 1
            if current_level == -1:
                count += 1
    return count
