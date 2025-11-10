function solution(tickets) {
    //ticket을 hashmap으로 저장
    const graph = {}
    for(t of tickets){
        const [from, to] = t
        if(!graph[from])graph[from]=[]
        graph[from].push([to, false]) //[passport 이름, 방문 여부]
    }

    let visited = null
    const maxDepth = tickets.length+1
    //모든 도시를 방문할 수 없는 경우는 주어지지 않으므로 dfs로 탐색
    
    function dfs(cur, route, depth){
        if(depth===maxDepth) {
            if(!visited) visited = route
            else visited = [visited, route].sort()[0]
            return
        }
        if(!graph[cur]) return
        for(let i=0; i<graph[cur].length ; i++){
            if(graph[cur][i][1]===true) continue; //방문 시 넘어감
            graph[cur][i][1] = true //방문 처리
            dfs(graph[cur][i][0], [...route, graph[cur][i][0]], depth+1)
            graph[cur][i][1] = false //방문 처리 취소
        }
    }
    
    dfs("ICN", ["ICN"], 1)
    
    return visited;
}