const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N;
  for await (const line of rl) {
    N = BigInt(line);
    rl.close();
  }
  let left = BigInt(1);
  let right = N;
  let result = 0;

  while (left <= right) {
    let mid = (left + right) / BigInt(2);
    if (mid * mid == N) {
      result = mid;
      break;
    } else if (mid * mid < N) {
      left = mid + BigInt(1);
    } else right = mid - BigInt(1);
  }

  console.log(result.toString());
})();
