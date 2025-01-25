import sys
input=sys.stdin.readline

stack=[]

def push(p):
    stack.append(p)

def pop():
    if stack:
        print(stack.pop())
    else:
        print(-1)

def size():
    print(len(stack))

def empty():
    if not stack:
        print(1)
    else:
        print(0)

def top():
    if stack:
        print(stack[-1])
    else:
        print(-1)

N=int(input())
commands=[]
for _ in range(N):
    command=input().split()

    if command[0]=='push':
        push(command[1])
    if command[0]=='pop':
        pop()
    if command[0]=='size':
        size()
    if command[0]=='empty':
        empty()
    if command[0]=='top':
        top()