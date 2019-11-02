def jumping_on_clouds(n, c):
    c.append(0)
    ans = 0
    position = 0
    while position < n-1:
        position += (c[position+2] == 0) + 1
        ans += 1
    return ans


#had to add the n in the __name__ == '__main__' result line 