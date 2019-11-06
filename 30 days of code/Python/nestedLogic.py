returnDate = list(map(int, input().split()))
dueDate = list(map(int, input().split()))

fine = 0
if returnDate[2] > dueDate[2]:
    fine = 10000
elif returnDate[2] == dueDate[2]:
    if returnDate[1] > dueDate[1]:
        fine = 500 * (returnDate[1] - dueDate[1])
    elif returnDate[1] == dueDate[1]:
        if returnDate[0] > dueDate[0]:
            fine = 15 * (returnDate[0] - dueDate[0])

print(fine)