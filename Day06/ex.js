// Itere de 0 a 10 usando o loop for, faça o mesmo usando o loop while e faça o loop while
let i = 0;
for (i = 0; i <= 10; i++) {
  console.log(i);
}

i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Itere de 10 a 0 usando o loop for, faça o mesmo usando o loop while e faça o loop while
for (i = 10; i >= 0; i--) {
  console.log(i);
}

i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

i = 10;
do {
  console.log(i);
  i--;
} while (i > 0);

// Iterar de 0 a n usando loop for
console.log(i);
let n = 15;
for (i = 0; i <= n; i++) {
  console.log(i);
}

// Escreva um loop que crie o seguinte padrão usando console.log():
for (i = 1; i <= 7; i++) {
  const str = '#';
  console.log(str.repeat(i));
}

// Use loop to print the following pattern:
for (i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Using loop print the following pattern
for (i = 0; i <= 10; i++) {
  if (i == 0) {
    console.log('i i^2 i^3');
  }
  console.log(`${i}  ${i ** 2} ${i ** 3}`);
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers
for (i = 1; i <= 100; i++) {
  let isPrime = true;

  for (let aux = 2; aux < i; aux++) {
    if (i % aux == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (i = 0; i <= 100; i++) {
  if (i == 100) {
    console.log(`The sum of all numbers from 0 to 100 is ${(sum += i)}.`);
  } else {
    sum += i;
  }
}

// Use o loop for para iterar de 0 a 100 e imprimir a soma de todos os pares e a soma de todos os impares. Imprima a soma dos pares e a soma dos impares como array
let sumPar = 0;
let sumImp = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumPar += i;
  } else {
    sumImp += i;
  }
}
console.log([sumPar, sumImp]);

//Develop a small script which generate array of 5 random numbers
let arr = [];
for (i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 11));
}
console.log(arr);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
arr = [];
for (i = 0; arr.length < 5; i++) {
  let num = Math.floor(Math.random() * 11);
  if (arr.indexOf(num) == -1) {
    arr.push(num);
  }
}
console.log(arr);

//Develop a small script which generate a six characters random id:
let id = '';
const carac = 'abcdefghijklmnopqrstuvwxyz0123456789';
for (i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * carac.length);
  id += carac[num];
}
console.log(id);

// EX 02

// Develop a small script which generate any number of characters random id

id = '';
let idLength = Math.floor(Math.random() * 15);
for (i = 0; i < idLength; i++) {
  let num = Math.floor(Math.random() * carac.length);
  id += carac[num];
}
console.log(id);

//Write a script which generates a random hexadecimal number.
id = '#';

//Write a script which generates a random rgb color number.
console.log(
  `rgb(${Math.round(Math.random() * 256)},${Math.round(
    Math.random() * 256
  )},${Math.round(Math.random() * 256)})`
);

//Using the above countries array, create the following new array.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

arr = [];
for (i = 0; i < countries.length; i++) {
  arr.push(countries[i].toUpperCase());
}
console.log(arr);

//Using the above countries array, create an array for countries length'.
arr = [];
for (i = 0; i < countries.length; i++) {
  arr.push(countries[i].length);
}
console.log(arr);

// Use the countries array to create the following array of arrays:
arr = [];
for (i = 0; i < countries.length; i++) {
  arr.push([
    countries[i],
    countries[i].substring(0, 3).toUpperCase(),
    countries[i].length,
  ]);
}
console.log(arr);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
arr = [];
for (i = 0; i < countries.length; i++) {
  let land = 'land';
  if (countries[i].indexOf(land) == -1) {
    continue;
  } else {
    arr.push(countries[i]);
  }
}
arr.length == 0
  ? console.log('All these countries are without land')
  : console.log(arr);

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

arr = [];
for (i = 0; i < countries.length; i++) {
  let land = 'ia';
  if (countries[i].endsWith(land) == false) {
    continue;
  } else {
    arr.push(countries[i]);
  }
}
arr.length == 0
  ? console.log('These are countries ends without ia')
  : console.log(arr);

//Using the above countries array, find the country containing the biggest number of characters.
let countryLenght = '';
for (i = 0; i < countries.length; i++) {
  if (countries[i].length > countryLenght.length) {
    countryLenght = countries[i];
  }
}
console.log(countryLenght);

//Using the above countries array, find the country containing only 5 characters.
arr = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    arr.push(countries[i]);
  }
}
console.log(arr);

//Find the longest word in the webTechs array

let webLenght = '';
for (i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > webLenght.length) {
    webLenght = webTechs[i];
  }
}
console.log(webLenght);

//Use the webTechs array to create the following array of arrays:
arr = [];
for (i = 0; i < webTechs.length; i++) {
  arr.push([webTechs[i], webTechs[i].length]);
}
console.log(arr);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acronym = '';
for (i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
}
console.log(acronym);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}
// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon'];
arr = [];
for (i = fruit.length - 1; i >= 0; i--) {
  arr.push(fruit[i]);
}
console.log(arr);

// Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];

for (i = 0; i < fullStack.length; i++) {
  for (j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}

// EX 03

// Copy countries array(Avoid mutation)
//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const paises = [];

for (i = 0; i < countriesArq.length; i++) {
  paises.push(countriesArq[i]);
}
let sortedCountries = paises.sort();
console.log(paises);

//Sort the webTechs array and mernStack array
webTechs.sort();
mernStack.sort();

//Extract all the countries contain the word 'land' from the countries array and print it as array
arr = [];
for (i = 0; i < countriesArq.length; i++) {
  let land = 'land';
  if (countriesArq[i].indexOf(land) == -1) {
    continue;
  } else {
    arr.push(countriesArq[i]);
  }
}
console.log(arr);

// Find the country containing the hightest number of characters in the countries array

countryLenght = '';
for (i = 0; i < countriesArq.length; i++) {
  if (countriesArq[i].length > countryLenght.length) {
    countryLenght = countriesArq[i];
  }
}
console.log(countryLenght);

// Extract all the countries containing only four characters from the countries array and print it as array
countryLenght = [];
for (i = 0; i < countriesArq.length; i++) {
  if (countriesArq[i].length == 4) {
    countryLenght.push(countriesArq[i]);
  }
}
console.log(countryLenght);

// Extract all the countries containing two or more words from the countries array and print it as array
countryLenght = [];
for (i = 0; i < countriesArq.length; i++) {
  if (countriesArq[i].indexOf(' ') != -1) {
    countryLenght.push(countriesArq[i]);
  }
}
console.log(countryLenght);

// Reverse the countries array and capitalize each country and stored it as an array
countryLenght = [];
for (i = countriesArq.length - 1; i >= 0; i--) {
  countryLenght.push(countriesArq[i].toUpperCase());
}
console.log(countryLenght);
