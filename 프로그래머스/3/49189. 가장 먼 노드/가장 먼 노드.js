function solution(n, edge) {
    let tree = new Map()
    let count = [0]
    for (let i=1; i<=n ; i++){
        tree[i]=[]
        count[i]=0
    }
    edge.forEach(([s,e])=>{
                tree[s].push(e)
                tree[e].push(s)
        }
    )
    
    let queue = [[1,0]]
    
    let maxCount=0
    
    
    while (queue.length>0){
        let [q, c] = queue.shift()
        maxCount = Math.max(maxCount, c)
        if (count[q]===0){
            count[q]=c+1
            tree[q].forEach(
                (newQ)=> 
                {queue.push([newQ, c+1])
                }
            )
        } 
    }
    
    var answer = count.filter((e)=>e===maxCount).length;
    return answer;
}