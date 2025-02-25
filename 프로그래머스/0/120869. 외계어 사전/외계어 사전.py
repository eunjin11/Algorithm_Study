def solution(spell, dic):
    len_spell = len(spell)
    answer = 2
    for word in dic:
        if len(word)==len_spell:
            set_spell=set(spell)
            for w in word:
                if w in set_spell:
                    set_spell.remove(w)
            if not set_spell:
                answer = 1
                break
                   
    return answer