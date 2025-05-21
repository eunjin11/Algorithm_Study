function isValid(n){
    let count = 0
    //약수의 개수 찾기
    for(let i = 1 ; i<=n ; i++)
        if (n%i===0) count++

    return count>=3
}

function solution(n) {
    var answer = 0;
    for(let i = 1 ; i<=n ; i++)
        if (isValid(i)) answer++

    return answer;
}