"""class Node:
    def __init__(self, freq,data):
        self.freq= freq
        self.data=data
        self.left = None
        self.right = None
"""        

# Enter your code here. Read input from STDIN. Print output to STDOUT
def decodeHuff(root, s):
	#Enter Your Code Here
    n = root
    string = ''

    for i in range(len(s)):
        if s[i] == '0':
            n = n.left
        else:
            n = n.right
        
        if n.left == None and n.right == None:
            string = string + n.data
            n = root
            
    print(string)