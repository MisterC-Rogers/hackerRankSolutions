#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countInversions function below.
def countInversions(arr):
    res = [0] * len(arr)

    return merge(arr, res, 0, len(arr)-1)


def merge(arr, res, left, right):
    if left >= right:
        return 0

    inversions = 0

    left_end = (left + right) // 2
    right_start = left_end + 1

    inversions += merge(arr, res, left, left_end)
    inversions += merge(arr, res, right_start, right)
    inversions += mergeHalf(arr, res, left, right)
    return inversions


def mergeHalf(arr, res, left, right):
    if left >= right:
        return 0

    inversions = 0

    left_end = mid = (left + right) // 2
    right_start = right_beg = left_end + 1
    left_beg = index = left

    while left <= left_end and right_start <= right:
        pt1 = arr[left]
        pt2 = arr[right_start]

        if pt1 <= pt2:
            res[index] = pt1
            index += 1
            left += 1
        else:
            res[index] = pt2
            index += 1
            inversions += mid - left + 1
            right_start += 1

    while left <= left_end:
        res[index] = arr[left]
        left += 1
        index += 1

    while right_start <= right:
        res[index] = arr[right_start]
        right_start += 1
        index += 1


    arr[left_beg:left_end + 1] = res[left_beg:left_end + 1]
    arr[right_beg:right + 1] = res[right_beg: right + 1]

    return inversions

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        result = countInversions(arr)

        fptr.write(str(result) + '\n')

    fptr.close()
