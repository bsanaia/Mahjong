
// sieve of eratosthenes
export function generatePrimes(num: number) {
  const array = [];
  const range = Math.sqrt(num);
  const output = [];

  for (let i = 0; i < num; i++) {
    array.push(true);
  }

  for (let i = 2; i <= range; i++) {
    if (array[i]) {
      for (let j = i * i; j < num; j += i) {
        array[j] = false;
      }
    }
  }

  for (let i = 2; i < num; i++) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
}



// Fisher–Yates Algorithm for random array shuffle, didn't want to use 3rd part library
export function shuffleArray(array) {
  const copy = [];
  let n = array.length;
  let i;
  while (n) {
    i = Math.floor(Math.random() * array.length);
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}
