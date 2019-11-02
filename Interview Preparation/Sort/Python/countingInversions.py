#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countInversions function below.
def merge(left, right):
    counter = 0
    result = []
    i,j = 0,0
    ra = result.append
    lenl = len(left)
    lenr = len(right)

# Till this condition is true, keep on appending elements into resultant array
    while (i<lenl) and (j<lenr):
        if left[i] <= right[j]:
            ra(left[i]) #append ith element of left into resultant array
            i+=1
        else:
            ra(right[j])  #append jth element of right into resultant array
            j+=1
            counter += lenl-i  #COUNT HERE!
# it is basically specifies that if any element is remaining in the left array from -
# ith to the last index so that it should appended into the resultant array. And similar -
# to the right array.
    result += left[i:]
    result += right[j:]
    return result, counter

# Definition for merge sort
# this takes an input list

def mergesort(lst):    
    if(len(lst)<= 1): # this means that the list is already sorted.
        return lst, 0
    mid = (len(lst)//2)
# Define definition for merge which basically takes two arrays i.e., the left and right part 
# left array will be mergesort applied over the list from starting index 
# till the mid index
    left, counter0 = mergesort(lst[:mid])
# right array will be mergesort applied recursively over the list from mid index
# till the last index 
    right, counter1 = mergesort(lst[mid:])
    result, counter2 = merge(left,right)
    return result, counter2 + counter0 + counter1

def countInversions(arr):
    #Idea: Count the number of transpositions needed when you apply the mergesort to arr.
    final, counter = mergesort(arr)
    return counter

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        n = int(input())

        arr = list(map(int, input().rstrip().split()))

        result = countInversions(arr)

        fptr.write(str(result) + '\n')

    fptr.close()
