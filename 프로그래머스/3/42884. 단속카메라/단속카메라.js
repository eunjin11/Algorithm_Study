function solution(routes) {
    //[ [ -20, -15 ], [ -18, -13 ], [ -14, -5 ], [ -5, -3 ] ]
    // 이 경우 -15에 카메라를 설치
    routes.sort((a,b)=> a[1]-b[1] || a[0]-b[0])
   
    const cameras = []
    let prevCamera = -30001
    
    for(let i=0;i<routes.length;i++){
        if(!(routes[i][0]<=prevCamera && prevCamera<=routes[i][1])) {
            cameras.push(routes[i][1])
            prevCamera=routes[i][1]
        }
    }
    
    return cameras.length;
}