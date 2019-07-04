class Solution:
    # Write your code here
    def __init__(self):
        self.stack = []
        self.queue = []
    #Stack functions
    def pushCharacter(self, x):
        self.stack.append(x)
    def popCharacter(self):
        return self.stack.pop()
    #Queue functions
    def enqueueCharacter(self, x):
        self.queue.append(x)
    def dequeueCharacter(self):
        return self.queue.pop(0)
    
