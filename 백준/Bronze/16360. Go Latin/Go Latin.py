import sys
input = sys.stdin.readline

N=int(input())

hash={}
hash['a']='as'
hash['i']='ios'
hash['y']='ios'
hash['l']='les'
hash['n'] ='anes'	
hash['ne'] = 'anes'
hash['o']='os'
hash['r']='res'
hash['t']='tas'
hash['u']='us'
hash['v']='ves'
hash['w'] =	'was'

for i in range(N):
    word=input().rstrip()
    if word[-1] in hash:
        word=word[:-1]+hash[word[-1]]
    elif word[-2]+word[-1] in hash:
        word=word[:-2]+hash['ne']
    else:
        word+='us'
    print(word)