function solution(n, times) {
    
    // n = time/7 + time/10 ... 이다. -> 6 = 28/7 + 28/10 = 4+2
    // 이분 탐색으로 가능한 time을 찾는다.
    let left = 1;
    let right = Math.max(...times) * n;
    let ans = right;

    while(left<=right){
        let mid = Math.floor((right+left)/2)
        
        let count = 0
        for(const t of times){
            count+=Math.floor(mid/t)
            if (count>=n) break
        }
        
        if(count>=n){
            ans=mid
            right = mid-1
        }
        if(count<n){
            left = mid+1
        }
    }
    return ans
}