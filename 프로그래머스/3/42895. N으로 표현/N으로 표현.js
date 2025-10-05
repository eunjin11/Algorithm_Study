function solution(N, number) {
    if (N == number) return 1;
    const numList = Array.from(new Array(9), () => new Set()); 

    for (let i = 1; i < 9; i++) {
        numList[i].add(Number(String(N).repeat(i))); // 5, 55, 555
    }
    
    for (let i = 2; i < 9; i++) { //숫자를 i개 썼을 때 가능한 숫자 추가
        for (let j = 1; j < i; j++) {
            for(num1 of numList[i-j]){
                for(num2 of numList[j]){
                    numList[i].add(num1+num2)
                    numList[i].add(num1-num2)
                    numList[i].add(num1*num2)
                    numList[i].add(num1/num2)
                }
            }
        }
        if (numList[i].has(number)) {
          return i;
        }
    }
    
    return -1;
}