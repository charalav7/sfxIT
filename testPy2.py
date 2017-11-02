list = [["710121-1234","P","P"], [ "720122-2345", "F", "F"],["730123-3456", "P",  "P"], ["810124-4567",  "P",  "F"], [ "820125-5678",  "F",  "F"], ["830126-6789",  "F",  "F"], ["840127-7890",  "P",  "P"]]

mediocre = []
exceptional = []
failed = []
for i in list:
    if (i[1]=="P" or i[2]=="P"):
        mediocre.append(i)
        if (i[1]=="P" and i[2]=="P"):
            exceptional.append(i)
    else:
        failed.append(i)

print("Students who passed at least one test:")
for i in mediocre:
    print(i[0])

print("\nStudents who passed both tests:")
for i in exceptional :
    print(i[0])

print("\nStudents who failed both tests:")
for i in failed:
    print(i[0])