function solution(edges) {

    // 1. 각 노드의 들어오는 간선 수와 나가는 간선 수 구하기
    // edges의 Node 중 가장 큰 수가 노드의 총 개수
    //const nodeCount = Math.max(...edges.flat());
    let nodeCount=0;
    for(edge of edges){
        nodeCount = Math.max(...[nodeCount, ...edge])
    }
    const nodeList = Array.from({ length: nodeCount+1 }, () => ({ in: 0, out: 0}))
    
    for(edge of edges){
        const [from, to] = [edge[0], edge[1]]
        nodeList[from].out++;
        nodeList[to].in++;
    }
    
    let createdNode = 0;
    let sitckGraphCount = 0;
    let eightGraphCount = 0;
    for(let i = 1 ; i<=nodeCount ; i++){
        const node = nodeList[i]
        
        // 2. 생성된 정점 구하기 (나가는 간선의 수가 2 이상이고, 들어오는 간선의 수가 0)
        //생성된 정점은 나가는 간선의 수가 2 이상이고, 들어오는 간선의 수가 0이다.
        if(node.out >= 2 && node.in===0){
            createdNode = i;
        }
        
        // 3. 막대 모양 그래프의 개수 구하기
        // 막대 모양 그래프는 나가는 간선의 수가 0, 들어오는 간선의 수가 1이상인 노드가 1개 있어야한다.
        // 해당 노드의 수가 막대 모양 그래프의 수이다.
        else if(node.out === 0 && node.in >= 1){
            sitckGraphCount++;
        }
        
        // 4. 8자 모양 그래프의 개수 구하기
        // 8자 모양 그래프는 도넛 모양 그래프 2개가 결합된 것
        // 두 도넛 그래프를 결합하는 정점은 나가는 간선이 2개, 들어오는 간선이 2개이상이다.
        else if(node.out === 2 && node.in >= 2){
            eightGraphCount++;
        }
    }
    
    // 5. 도넛 모양 그래프의 개수
    //도넛 모양 그래프는 생성된 정점의 나가는 간선의 수에서 막대 모양 그래프와 8자 모양 그래프의 개수를 뺀 수이다.
    
    const donutGraphCount = nodeList[createdNode].out - sitckGraphCount - eightGraphCount

    // 생성한 정점의 번호, 도넛 그래프 수, 막대 그래프 수, 8자 그래프 수 반환
    return [createdNode, donutGraphCount, sitckGraphCount, eightGraphCount];
}