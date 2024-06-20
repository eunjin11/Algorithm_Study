import sys
input = sys.stdin.readline

N=int(input())
meeting=[]
for _ in range(N):
    meeting.append(tuple(map(int,input().split())))

meeting.sort(key = lambda x :(x[1], x[0]))
count=0
end_time=0

for i in meeting:
    if i[0]>=end_time:
        end_time=i[1]
        count+=1

print(count)