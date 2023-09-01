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
for (i = 0; i < 5; i++) {
  const carac = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let num = Math.floor(Math.random() * carac.length);
  id += carac[num];
}
console.log(id);
