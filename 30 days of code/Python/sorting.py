import sys

n = int(input().strip())
a = list(map(int, input().strip().split(' ')))
# Write Your Code Here
totalSwap = 0
for i in range(len(a)-1):
    flag = False 
    for j in range(len(a)-i-1):
        if a[j] > a[j+1]:
            a[j+1], a[j] =a[j], a[j+1]
            totalSwap +=1
            flag = True
    if flag is False:
        break
print('Array is sorted in ' +str(totalSwap)+ ' swaps.')
print('First Element:', a[0])
print('Last Element:', a[-1])