import sys
input = sys.stdin.readline

N = int(input())
meetings=[]
count=0

for i in range(0,N):
    start, end = map(int, input().split())
    meetings.append([start, end])

#끝나는 시간 기준으로 소트
meetings.sort(key=lambda x: (x[1], x[0]))

end_time=0
for meeting in meetings:
    if meeting[0]>=end_time:
        end_time=meeting[1]
        #print(meeting)
        count+=1
    
print(count)
