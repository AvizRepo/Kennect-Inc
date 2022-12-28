# For loop
for i in range(10):
    print(i)

# While loop
i = 0
while i < 10:
    print(i)
    i += 1

# Continue statement
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)

# If, Else statement
x = 5
if x > 0:
    print("x is positive")
else:
    print("x is negative")

# Switch statement (using the "elif" keyword in Python)
day = "Monday"
if day == "Monday":
    print("It's Monday!")
elif day == "Tuesday":
    print("It's Tuesday!")
else:
    print("It's some other day.")
