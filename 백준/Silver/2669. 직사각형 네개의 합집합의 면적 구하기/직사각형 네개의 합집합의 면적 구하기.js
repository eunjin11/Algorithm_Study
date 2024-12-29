const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  const lines = [];
  let counter = 4;
  for await (const line of rl) {
    lines.push(line.split(" ").map(Number));
    counter--;
    if (counter == 0) rl.close();
  }
  let matrix = new Array(101).fill(0).map(() => new Array(101).fill(0));

  for (const [startX, startY, endX, endY] of lines) {
    for (let i = startX; i < endX; i++) {
      for (let j = startY; j < endY; j++) {
        matrix[j][i] = 1;
      }
    }
  }

  let sum = 0;
  matrix.forEach((row) => {
    const rowSum = row.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    sum += rowSum;
  });

  console.log(sum);
})();
