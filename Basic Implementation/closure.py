# Closure function
def outer_func(x):
    def inner_func():
        print(x)
    return inner_func

# Creating a closure and calling it
closure = outer_func(5)
closure()  
# Output will be: 5
