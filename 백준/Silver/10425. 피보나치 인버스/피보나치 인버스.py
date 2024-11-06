T = int(input())

F={0:0, 1:2, 2:3, 3:4, 5:5, 8:6}
Flist = [0,1,1,2,3,5,8]
for i in range(7, 100001):
    temp = Flist[i-2]+Flist[i-1]
    Flist.append(temp)
    F[temp]=i

for _ in range(T):
    Fn=int(input())
    print(F[Fn])
