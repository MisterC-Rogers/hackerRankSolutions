""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""

def checkBST(root, low=0, high=10000):
    if root == None:
        return True
    elif root.data < low or root.data > high:
        return False
    return checkBST(root.left, low, root.data - 1) and checkBST(root.right, root.data + 1, high)