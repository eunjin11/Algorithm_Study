function solution(triangle) {
    for(let i=1;i<triangle.length;i++){
        for(let j=0;j<i+1;j++){
            triangle[i][j]=Math.max((triangle[i-1][j]+triangle[i][j])||0, (triangle[i-1][j-1]+triangle[i][j])||0) 
        }
    }
    // triangle의 모습
    //[7], [10,15], [23, 16, 15]...
    
    return Math.max(...triangle[triangle.length-1])
}