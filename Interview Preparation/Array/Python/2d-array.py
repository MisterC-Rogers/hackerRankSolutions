# Complete the hourglassSum function below.
def hourglassSum(arr):
    max_sum = -1000
    for i in range(4):
        for j in range(4):
            top = arr[i][j] + arr[i][j+1] + arr[i][j+2]
            middle = arr[i+1][j+1]
            bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            max_sum = max(max_sum, top + middle + bottom)
    # print(max_sum)
    return(max_sum)
