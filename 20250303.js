const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);

function a(n) {
  for (let m = 1; m <= n; m++) {
    let sum = m;
    let num = m;

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    if (sum === n) {
      return m;
    }
  }
  return 0;
}
console.log(a(N));
