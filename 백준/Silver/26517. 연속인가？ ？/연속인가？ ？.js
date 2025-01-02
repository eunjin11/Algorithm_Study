const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let counter = 1;
  for await (const line of rl) {
    if (counter == 1) {
      x = Number(line);
      counter--;
    } else {
      [a, b, c, d] = line.split(" ").map(Number);
      rl.close();
    }
  }

  if (a * x + b == c * x + d) console.log("Yes", a * x + b);
  else console.log("No");
})();
