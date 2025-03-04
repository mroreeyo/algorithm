function a(n) {
  const totalSum = n.reduce((sum, height) => sum + height, 0);
  
  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (totalSum - n[i] - n[j] === 100) {
        const result = n.filter((_, idx) => idx !== i && idx !== j);
        result.sort((a, b) => a - b);
        console.log(result.join('\n'));
        return;
      }
    }
  }
}
