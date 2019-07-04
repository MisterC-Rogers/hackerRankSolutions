d = {}
for _ in range(int(input())):
    n,p = input().split()
    d[n] = p
while True:
    try:
        n = input()
        if n in d:
            print(n+"="+d[n])
        else:
            print("Not found")
    except:
        break