function solution(n) {
    if (n==1) return 1
    
    const arr = Array(2001).fill(0)
    arr[1]=1
    arr[2]=2
    
    for (let i = 3; i<=n;i++){
        arr[i]=arr[i-1]%1234567+arr[i-2]%1234567
    }
    
    return arr[n]%1234567;
}