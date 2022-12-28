# Binary Search Tree
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)

# Creating a BST and inserting some values
root = BST(10)
root.insert(5)
root.insert(15)
root.insert(2)
root.insert(7)
root.insert(12)
root.insert(20)
