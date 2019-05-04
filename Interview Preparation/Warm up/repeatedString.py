# Complete the repeatedString function below.
def repeatedString(s, n):
    return n // len(s) * s.count('a') + s[0: n % len(s)].count('a')

