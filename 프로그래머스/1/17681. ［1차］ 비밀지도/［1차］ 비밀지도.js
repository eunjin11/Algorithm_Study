function solution(n, arr1, arr2) {
    const arr = Array(n).fill("")
    
    for(let i=0;i<n;i++){
        
        let newStr1 = arr1[i].toString(2)
        if(newStr1.length<n) newStr1= "0".repeat(n-newStr1.length)+newStr1
        
        let newStr2 = arr2[i].toString(2)
        if(newStr2.length<n) newStr2= "0".repeat(n-newStr2.length)+newStr2
        
        let newStr = ""
        for(let j=0;j<n;j++){
            newStr+= newStr1.at(j) | newStr2.at(j) ? '#' : " "
        }
        arr[i]=newStr
    }
    
    return arr;
}