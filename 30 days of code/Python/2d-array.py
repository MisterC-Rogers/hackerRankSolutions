if __name__ == '__main__':
    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))
    maxx = -81 # if all the no are -9 then sum will be -81
    for i in range(4):
        for j in range(4):
            total = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            if total > maxx:
                maxx = total
    print(maxx)
