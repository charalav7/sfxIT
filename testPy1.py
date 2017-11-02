list = [["Senior software Engineer", 77600], ["Network Engineer", 51600], ["Systems Administrator", 38000], ["Software Engineer", 57600], ["Project Manager", 62300], ["IT Consultant", 45300]]

for i in list:
    print(i[0]+":",i[1],"kr")

total =0
for i in list:
    total += i[1]
print("\nThe average wage is:",int(total//6),"kr")

print("\nSorted based on wager:")
for i in sorted(list,key=lambda l:l[1]):
    print(i[0]+":",i[1],"kr")

print("\nJobs with wager more than 50000 kr:")
for i in sorted(list,key=lambda l:l[1],reverse=True):
    if i[1] < 50000: break
    print(i[0]+":",i[1],"kr")