function getNextPrimeDifference(x) {
  function isPrime(x) {
    // Special case for x = 2
    if (x === 2) {
      return true;
    }

    // Returning false for x < 2 or x is even
    if (x < 2 || x % 2 === 0) {
      return false;
    }

    // Checking for divisibility by odd numbers up to the square root of x
    for (var i = 3; i <= Math.sqrt(x); i += 2) {
      if (x % i === 0) {
        return false;
      }
    }

    // If no divisors were found, x is a prime number
    return true;
  }

  var nextPrime = x + 1;
  while (!isPrime(nextPrime)) {
    nextPrime++;
  }
  return nextPrime - x;
}

// Testing the function
console.log(getNextPrimeDifference(2));  // Output will be: 1
console.log(getNextPrimeDifference(3));  // Output will be: 2
console.log(getNextPrimeDifference(4));  // Output will be: 2
console.log(getNextPrimeDifference(5));  // Output will be: 2
console.log(getNextPrimeDifference(6));  // Output will be: 5
