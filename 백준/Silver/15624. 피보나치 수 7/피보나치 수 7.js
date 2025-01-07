const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n;

  for await (const line of rl) {
    n = Number(line);
    rl.close();
  }
  const F = new Array(n + 2).fill(0);
  F[1] = 1;

  for (let i = 2; i <= n; i++) {
    F[i] = (F[i - 1] + F[i - 2]) % 1000000007;
  }

  console.log(F[n]);
})();
