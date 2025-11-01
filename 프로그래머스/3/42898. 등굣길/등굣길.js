function solution(m, n, puddles) {
    var answer = 0;
    
    const dp = Array.from({length: n+1}, () => {return Array.from({length: m+1}, () => 0);});
    
    for(p of puddles){
        const [x, y] = p
        dp[y][x]=-1
    }
    
    dp[0][1] = 1;
    
    
    //dp에 저장되는 값은 해당 위치에 도달할 수 있는 길의 수 이다.
    //따라서 가장 윗 줄과 가장 왼쪽 줄의 칸에 도달할 수 있는 방법은 1개뿐이다.
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
          if(dp[i][j]===-1){
              dp[i][j]=0
          }
          else dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000000007;
        }
      }
  
    return dp[n][m];
}
