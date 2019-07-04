if __name__ == '__main__':
    n = int(input())
    print(len(max(bin(n)[2:].split('0'))))