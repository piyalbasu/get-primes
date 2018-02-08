function genPrimes(x) {
  let primes = [];
  
  for (let i = 1; i < x; i++ ) {
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        primes.push(i);
      }

      if (i % j === 0) {
        break;
      }
    }
  }
  return primes;
}
