function solution(n, costs) {
    let answer = 0;

    // 비용 기준으로 정렬
    costs.sort((a, b) => a[2] - b[2]);

    // 초기 연결된 노드 집합
    const visited = new Set([costs[0][0]]);

    while (visited.size !== n) {
        for (let i = 0; i < costs.length; i++) {
            const [a, b, cost] = costs[i];

            if (visited.has(a) && visited.has(b)) {
                continue;
            }

            if (visited.has(a) || visited.has(b)) {
                visited.add(a);
                visited.add(b);
                answer += cost;
                break;
            }
        }
    }

    return answer;
}
