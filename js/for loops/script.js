const pets = ["pixie", "claude", "sebastian", "bug"];
// 1
let firstItem = pets.shift();
console.log(firstItem);
pets.push(firstItem);
console.log(pets);

//pets.push(pets.shift());

// 2
pets.reverse();
console.log(pets);

// 3
const lastItem = pets.pop();

firstItem = pets.shift();
pets.push(firstItem);

console.log(pets);

// 4

for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i].charAt(0).toUpperCase() + pets[i].slice(1);
}

console.log(pets);

// 5
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i].slice(0, 3);
}

console.log(pets);

// MVP
// Using a while loop generate a list of 10 random unique numbers
// Each number must be between 0 and 15
// Tips
// You may need to google how to generate, you can use the Math.random() API

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * max - min) + min;
}

function generate10RandomNumbers() {
  const tmp = [];

  while (tmp.length < 10) {
    let random = generateRandomNumber(1, 16);

    if (!tmp.includes(random)) {
      tmp.push(random);
    }
  }

  return tmp;
}

function generateNumbers(n, r) {
  const tmp = [];

  while (tmp.length < n) {
    const randomNumber = Math.floor(Math.random() * r);
    tmp.push(randomNumber);
  }

  return tmp;
}

console.log(generate10RandomNumbers());
console.log(generateNumbers(10, 100));

// Iterators
function calculate(number, func) {
  return func(number);
}

const x = 4;
const toThePowerOf2 = (number) => number ** 2;

// function toThePowerOf2(number) {
//   return number ** 2;
// }

console.log(toThePowerOf2(100)); // 10000
console.log(toThePowerOf2(10)); // 100

console.log(calculate(x, toThePowerOf2));

let input = [1, 2, 3, 4, 5, 6];

console.log(input);

let output = map(input, (number) => number * 100);

console.log(output);

output = input.map((number) => number * 1000);

console.log(output);

// output = input.filter((n) => n % 2 === 0);
