# Enter your code here. Read input from STDIN. Print output to STDOUT

def isPrime(n):
    if n == 2:
        return True
    elif n == 1:
        return False

    for i in range(2, int(n ** .5)+ 1):
        if (n % i ) == 0:
            return False
    return True

for _ in range(int(input())):
    if isPrime(int(input())):
        print('Prime')
    else:
        print('Not prime')