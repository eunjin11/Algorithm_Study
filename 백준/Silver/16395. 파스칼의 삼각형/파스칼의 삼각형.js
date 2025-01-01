const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  for await (const line of rl) {
    [n, k] = line.split(" ").map(Number);
    rl.close();
  }

  let triangle = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  triangle[1][1] = 1;
  for (let i = 2; i < n + 1; i++) {
    triangle[i][1] = 1;
    triangle[i][i] = 1;
    for (let j = 2; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  console.log(triangle[n][k]);
})();
