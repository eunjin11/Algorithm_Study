import sys
input = sys.stdin.readline

N=int(input())

total_count=int(input())
student=list(map(int, input().split()))

picture=[]
score=[]

for i in range(total_count):
    if student[i] in picture:
        for j in range(len(picture)):
            if student[i]==picture[j]:
                score[j]+=1
    else:
        if len(picture)>=N:
            for j in range(N):
                if score[j]==min(score):
                    del (picture[j])
                    del (score[j])
                    break

        picture.append(student[i])
        score.append(1)

picture.sort()
print(' '.join(map(str, picture)))

