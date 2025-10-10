const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")

const [N, K] = input[0].split(" ").map(Number)
const A = input[1].split(" ").map(Number)

let robots = Array(2 * N).fill(false)
let start = 0 // 올리는 위치 인덱스
let step = 0

while (true) {
  step++

  // 1. 벨트 회전
  start = (start - 1 + 2 * N) % (2 * N)
  let up = start
  let down = (start + N - 1) % (2 * N)
  robots[down] = false // 내리는 위치 로봇 제거

  // 2. 로봇 이동
  for (let i = N - 2; i >= 0; i--) {
    let cur = (start + i) % (2 * N)
    let next = (cur + 1) % (2 * N)
    if (robots[cur] && !robots[next] && A[next] > 0) {
      robots[cur] = false
      robots[next] = true
      A[next]--
    }
  }
  robots[down] = false // 내리는 위치 로봇 제거

  // 3. 로봇 올리기
  if (A[up] > 0) {
    robots[up] = true
    A[up]--
  }

  // 4. 종료 조건
  if (A.filter(v => v === 0).length >= K) break
}

console.log(step)
