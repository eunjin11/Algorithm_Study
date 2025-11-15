function solution(stones, k) {
    let left = 1;
    let right = 200000001;
    let answer = 0;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        let skip = 0;
        for(stone of stones){
            if(stone<=mid) skip++
            else skip = 0
            if(skip>=k) break
        }
        
        if (skip>=k) {
            right = mid - 1;
        } else {
            left = mid + 1;
            answer = left;
        }
    }
    
    return answer;
}