const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const lines = [];
  let counter = 3;
  for await (const line of rl) {
    lines.push(line.split(" ").map(Number));
    counter--;
    if (counter == 0) rl.close();
  }
  const [a1, a0] = lines[0];
  const c = lines[1];
  const n = lines[2];

  console.log(a1 * n + a0 <= c * n && a1 <= c ? 1 : 0);
})();
