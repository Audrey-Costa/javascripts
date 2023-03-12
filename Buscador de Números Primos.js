function findAllPrimes(num) {
  let i = 2;
  let primes = [2];
  while (i <= num) {
    let p = true;
    for(const element of primes){
      if(i%element===0){
        p = false;
        i++;
        break;
      }
    }
    if(!p){
      continue;
    }
    if(i > num){
      break;
    }
    primes.push(i);
    i++
  }
  return primes;
};

function sumPrimeNumbers(num){
  const primes = findAllPrimes(num);
  let initialValue = 0;
  const sum = primes.reduce((sum, currentValue) => sum + currentValue, initialValue);
  console.log(sum);
  return sum;
}

function isPrime(num){
  const primes = findAllPrimes(num);
  if (primes[primes.length - 1] === num){
    console.log(`O número ${num} é primo!`);
    return true;
  }
  console.log(`O número ${num} não é primo!`);
  return false;
}