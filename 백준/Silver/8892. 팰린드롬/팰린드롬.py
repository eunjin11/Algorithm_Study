import sys
input = sys.stdin.readline

T = int(input())

def check(l, k):
    for first_word in range(k):
        for second_word in range(k):
            if first_word!=second_word:
                word=l[first_word]+l[second_word]
                for i in range(len(word)):
                    if word[i]!=word[-(i+1)]:
                        break
                else:
                    print(word)
                    return False
    return True

for _ in range(T):
    k = int(input())
    l=[]
    for _ in range(k):
        l.append(input().rstrip())

    if (check(l, k)):
        print(0)
