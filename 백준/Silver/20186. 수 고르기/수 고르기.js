const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const input = [];
  let inputCount = 2;
  for await (const line of rl) {
    input.push(line);
    inputCount--;
    if (inputCount == 0) rl.close();
  }
  const [N, K] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  const sortedNumbers = numbers.sort((a, b) => b - a).slice(0, K);

  let answer = 0;
  let count = 0;

  for (const num of sortedNumbers) {
    answer += num - count;
    count++;
  }

  console.log(answer);
})();
