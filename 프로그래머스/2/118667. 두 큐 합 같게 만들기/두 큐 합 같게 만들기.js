function solution(queue1, queue2) {
  const sum1 = queue1.reduce((a, b) => a + b, 0);
  const sum2 = queue2.reduce((a, b) => a + b, 0);
  const target = (sum1 + sum2) / 2;

  const q = [...queue1, ...queue2];
  const n = q.length;
    
  let left = 0;
  let right = queue1.length;
    
  let curSum = sum1;
  let count = 0;

  while (left < n && right < n) {
    if (curSum === target) return count;
    if (curSum > target) {
      curSum -= q[left];
      left++;
    } else {
      curSum += q[right];
      right++;
    }
    count++;
  }

  return -1;
}
