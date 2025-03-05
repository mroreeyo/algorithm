const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let triangle= [];
for (let i = 1; (i * (i + 1)) / 2 <= 1000; i++) {
    triangle.push((i * (i + 1)) / 2);
}
function a(k) {
    for (let i = 0; i < triangle.length; i++) {
        for (let j = 0; j < triangle.length; j++) {
            for (let l = 0; l < triangle.length; l++) {
                if (triangle[i] + triangle[j] + triangle[l] === k) {
                    return 1;
                }
            }
        }
    }
    return 0;
}

let T = input[0];
let result = [];

for (let i = 1; i <= T; i++) {
    result.push(a(input[i]));
}

console.log(result.join('\n'));
