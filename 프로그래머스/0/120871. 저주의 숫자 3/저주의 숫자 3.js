function solution(n) {
    const isValid = (num) => num % 3 !== 0 && !String(num).includes('3');
    
    const numList = [0]
    let maxNum = 101
    for ( let i = 0 ; i<maxNum ; i++){
        if (isValid(i)) numList.push(i)
        else maxNum++
    }
    return numList[n];

}