N = int(input())

words=[]

idx = 0
first_char = ''
last_char = ''

for i in range(N):
    word = input()

    words.append(word)

    if word == '?':
        idx = i

if 0 <= idx - 1:
    first_char = words[idx - 1][-1]
if idx + 1 < len(words):
    last_char = words[idx + 1][0]

M = int(input())

for _ in range(M):
    word = input()

    if word in words:
        continue

    if first_char != '' and first_char != word[0] or last_char != '' and last_char != word[-1]:
        continue
    
    print(word)