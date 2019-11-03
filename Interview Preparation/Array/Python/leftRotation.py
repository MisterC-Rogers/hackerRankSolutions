# Complete the rotLeft function below.
def rotLeft(a, d):
    result = a[d:] + a[:d]
    return result
