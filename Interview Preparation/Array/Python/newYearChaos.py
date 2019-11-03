# Complete the minimumBribes function below.
def minimumBribes(q):
    count = 0
    for i in range(2):
        for j in range(len(q) - 1, 0, -1):
            if q[j] < q[j-1]:
                q[j], q[j-1] = q[j-1], q[j]
                count += 1

    if q == sorted(q):
        print(count)
    else:
        print('Too chaotic')