function solution(n, roads, sources, destination) {
    
    //1. roads를 그래프로 저장
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const distance = Array.from({ length: n + 1 }, () => -1);
    distance[destination] = 0;
    const queue = [destination]
    
    //2. bfs를 이용해 destination에서 sources로 가는 최단거리 찾기
    while(queue.length > 0){
        const q = queue.shift()
        for(const cur of graph[q]){
            if(distance[cur]===-1) {
                distance[cur]=distance[q]+1
                queue.push(cur)
            }
        }
    }
    
    return sources.map(s => distance[s]);
}