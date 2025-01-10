N = int(input())

dance = set()
dance.add('ChongChong')
for _ in range(N):
    source, target = map(str, input().split())
    if source in dance:
        dance.add(target)
    if target in dance:
        dance.add(source)

print(len(dance))

