// EX 01

// Declare uma função fullName e ela imprima seu nome completo.
function fullName() {
  return 'Breno X. YYYYY ZZZZZ';
}
console.log(fullName());

// Declare uma função fullName e agora ela recebe firstName, lastName como parâmetro e retorna seu nome completo.]
function fullName2(firstName, lastName) {
  return `Meu nome completo é ${firstName} ${lastName}`;
}
console.log(fullName2('Breno', 'XXX'));

// Declare uma função addNumbers e ela recebe dois parâmetros e retorna soma.
function addNumbers(x, y) {
  return x + y;
}
let x = 2,
  y = 4;
console.log(`A soma de ${x} e ${y} é ${addNumbers(x, y)}`);

// A área de um retângulo é calculada da seguinte forma: área = comprimento x largura . Escreva uma função que calcule areaOfRectangle .
function areaOfRectangle(x, y) {
  return x * y;
}
(x = 10), (y = 4);
console.log(
  `A area de um retangulo com comprimento ${x} e largura ${y} é ${areaOfRectangle(
    x,
    y
  )}`
);

// O perímetro de um retângulo é calculado da seguinte forma: perímetro= 2x(comprimento + largura) . Escreva uma função que calcule perímetroOfRectangle .
function perímetroOfRectangle(x, y) {
  return 2 * (x * y);
}
(x = 10), (y = 4);
console.log(
  `O perimetro de um retangulo com comprimento ${x} e largura ${y} é ${areaOfRectangle(
    x,
    y
  )}`
);

// O volume de um prisma retangular é calculado da seguinte forma: volume = comprimento x largura x altura . Escreva uma função que calcule volumeOfRectPrism .
function volumeOfRectPrism(x, y, z) {
  return x * y * z;
}
let z = 10;
(x = 5), (y = 4);
console.log(
  `O volume de um prisma retangular com comprimento ${x}, largura ${y} e altura ${z} é ${volumeOfRectPrism(
    x,
    y,
    z
  )}`
);

// A área de um círculo é calculada da seguinte forma: área = π xrxr . Escreva uma função que calcule areaOfCircle
function areaOfCircle(r) {
  return Math.PI * r ** 2;
}
let r = 5;

console.log(`A area de um circulo com raio ${r} é ${areaOfCircle(r)}`);

// A circunferência de um círculo é calculada da seguinte forma: circunferência = 2πr . Escreva uma função que calcule circumOfCircle
function circumOfCircle(r) {
  return 2 * Math.PI * r;
}
r = 10;

console.log(
  `A circunferencia de um circulo com raio ${r} é ${circumOfCircle(r)}`
);

// A densidade de uma substância é calculada da seguinte forma: densidade= massa/volume . Escreva uma função que calcule a densidade .
function densidade(x, y) {
  return x / y;
}
x = 10;
y = 2;
console.log(
  `A densidade de uma sub com massa ${x} e vol ${y} é ${densidade(x, y)}`
);

// A velocidade é calculada dividindo a distância total percorrida por um objeto em movimento dividida pela quantidade total de tempo gasto. Escreva uma função que calcule a velocidade de um objeto em movimento, speed .
function speed(x, y) {
  return x / y;
}
x = 100;
y = 21;
console.log(
  `A velocidade dada por um objeto que passa ${x} em ${y} é ${speed(x, y)}`
);
// O peso de uma substância é calculado da seguinte forma: peso = massa x gravidade . Escreva uma função que calcule o peso .
function peso(x, y) {
  return x * y;
}
(x = 10), (y = 4);
console.log(
  `O peso de um obj com massa ${x} na gravidade ${y} é ${peso(x, y)}`
);

// A temperatura em oC pode ser convertida em oF usando esta fórmula: oF = (oC x 9/5) + 32 . Escreva uma função que converta oC em oF convertCelsiusToFahrenheit .
function convertCelsiusToFahrenheit(x) {
  return x * (9 / 5) + 32;
}
x = 22;
console.log(`${x} graus em Fahrenheit é ${convertCelsiusToFahrenheit(x)}`);

// O índice de massa corporal (IMC) é calculado da seguinte forma: IMC = peso em Kg / (altura x altura) em m2 . Escreva uma função que calcule o IMC . O IMC é usado para definir amplamente os diferentes grupos de peso em adultos com 20 anos ou mais. Verifique se uma pessoa está abaixo do peso, normal, acima do peso ou obesa com base nas informações fornecidas abaixo.
function imc(x, y) {
  let ind = x / y ** 2;
  console.log(ind);
  if (ind < 18.95) {
    return 'Abaixo do peso : o IMC é inferior a 18,5';
  } else if (ind > 18.5 && ind < 24.9) {
    return 'Peso normal : o IMC é de 18,5 a 24,9';
  } else if (ind > 25.5 && ind < 29.9) {
    return 'Excesso de peso : o IMC é de 25 a 29,9';
  } else {
    return 'Obeso : IMC é 30 ou mais';
  }
}
x = 70;
y = 1.58;
console.log(imc(x, y));
// Escreva uma função chamada checkSeason , ela recebe um parâmetro de mês e retorna a estação: Outono, Inverno, Primavera ou Verão.
function checkSeason(mes) {
  switch (mes) {
    case 'setembro':
    case 'outubro':
    case 'novembro':
      return 'Outono';
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
      return 'Inverno';
    case 'março':
    case 'abril':
    case 'maio':
      return 'primavera';
    case 'junho':
    case 'julho':
    case 'agosto':
      return 'verão';
    default:
      return 'Inválido';
  }
}
console.log(checkSeason('janeiro'));

// Math.max retorna seu maior argumento. Escreva uma função findMax que receba três argumentos e retorne seu máximo sem usar o método Math.max.
function findMax(x, y, z) {
  if (x > y && x > z) {
    return 'x com ' + x;
  } else if (y > z && y > x) {
    return 'y com ' + y;
  } else {
    return 'z com ' + z;
  }
}
x = 10;
y = 200;
z = 30;
console.log(`O maior é ${findMax(x, y, z)}`);

// A equação linear é calculada da seguinte forma: ax + by + c = 0 . Escreva uma função que calcule o valor de uma equação linear, solveLinEquation.
function solveLinEquation(a, b, c) {
  return a * x + b * y + c;
}
const a = 2;
const b = 3;
const c = -6;
x = 4;
y = 5;
console.log(
  `O valor da equação ${a}x + ${b}y + ${c} é ${solveLinEquation(a, b, c)}`
);

// A equação quadrática é calculada da seguinte forma: ax2 + bx + c = 0 . Escreva uma função que calcule o valor ou valores de uma equação quadrática, solveQuadEquation .
function solveQuadEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  const solutions = [];

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    solutions.push(x1, x2);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    solutions.push(x);
  }

  return solutions;
}

console.log(
  `O valor da equação ${1}x + ${4}y + ${4} é ${solveQuadEquation(1, -1, -2)}`
);

//Declare um nome de função printArray . Toma array como parâmetro e imprime cada valor do array.

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const array = [1, 2, 3, 4, 5, 6];

printArray(array);

// Escreva um nome de função showDateTime que mostre a hora neste formato: 01/08/2020 04:08 usando o objeto Date.
function showDateTime() {
  const now = new Date();
  let minutes = now.getMinutes(),
    hours = now.getHours(),
    month = now.getMonth() + 1,
    date = now.getDate();
  minutes <= 9 ? (minutes = '0' + minutes) : minutes;
  hours <= 9 ? (hours = '0' + hours) : hours;
  month <= 9 ? (month = '0' + month) : month;
  date <= 9 ? (date = '0' + date) : date;

  console.log(`${date}/${month}/${now.getFullYear()}  ${hours}:${minutes}`);
}

showDateTime();

//Declare um nome de função swapValues ​​. Esta função troca o valor de x por y.
function swapValues(x, y) {
  let aux = y;
  y = x;
  x = aux;
  return [x, y];
}
x = 3;
y = 40;
console.log(swapValues(x, y));

// Declare um nome de função reverseArray . Toma array como parâmetro e retorna o inverso do array (não use método).
function reverseArray(array) {
  arr = [];
  for (i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  console.log(arr);
}

reverseArray(['a', 'b', 'c']);

// Declare um nome de função capitalizeArray . Toma array como parâmetro e retorna -maiúsculoarray.
function capitalizeArray(array) {
  maiusculoarray = [];
  for (i = 0; i < array.length; i++) {
    maiusculoarray.push(array[i].toUpperCase());
  }
  return maiusculoarray;
}

console.log(capitalizeArray(['Breno', 'Ama', 'demais', 'queijo']));

// Declare um nome de função addItem . Leva um parâmetro de item e retorna um array após adicionar o item
arr = ['a', 'b'];
function addItem(a) {
  arr.push(a);
  return arr;
}
console.log(addItem([1, 2, 3]));

// Declare um nome de função removeItem . Leva um parâmetro de índice e retorna um array após remover um item
function removeItem(ind) {
  arr.splice(ind, 1);
  return NaN;
}
console.log(`Array antes: ${arr}`);
removeItem(1);
console.log(` Array depois: ${arr}`);
// Declare um nome de função sumOfNumbers . Leva um parâmetro numérico e adiciona todos os números nesse intervalo.
arr = [];
function sumOfNumbers(x) {
  for (i = 0; i <= x; i++) {
    arr.push(i);
  }
}

console.log(`Array antes: ${arr}`);
sumOfNumbers(10);
console.log(` Array depois: ${arr}`);

// Declare um nome de função sumOfOdds . É necessário um parâmetro numérico e adiciona todos os números ímpares nesse intervalo.
arr = [];
function sumOfOdds(x) {
  for (i = 0; i <= x; i++) {
    if (i % 2 != 0) {
      arr.push(i);
    } else {
      continue;
    }
  }
}

console.log(`Array antes: ${arr}`);
sumOfOdds(10);
console.log(` Array depois: ${arr}`);

// Declare um nome de função sumOfEven . É necessário um parâmetro numérico e soma todos os números pares nesse intervalo.]
arr = [];
function sumOfEven(x) {
  for (i = 0; i <= x; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    } else {
      continue;
    }
  }
}

console.log(`Array antes: ${arr}`);
sumOfEven(10);
console.log(` Array depois: ${arr}`);

// Declare um nome de função evensAndOdds . Leva um número inteiro positivo como parâmetro e conta o número de pares e ímpares no número.
function sumOfEven(x) {
  let par = 0,
    impar = 0;
  for (i = 0; i <= x; i++) {
    if (i % 2 == 0) {
      par += 1;
    } else {
      impar += 1;
    }
  }
  return [par, impar];
}
let result = sumOfEven(100);
console.log(`Números de par: ${result[0]} \n Número de impar ${result[1]}`);

//Escreva uma função que receba qualquer número de argumentos e retorne a soma dos argumentos
function sum(...args) {
  let soma = 0;
  for (i = 0; i < args.length; i++) {
    soma += args[i];
  }

  return soma;
}
const resultado = sum(1, 2, 3);
console.log('Soma dos argumentos:', resultado);

// Escreva uma função que gere um randomUserIp .
id = '';
const carac = 'abcdefghijklmnopqrstuvwxyz0123456789';
function randomUserIp() {
  let idLength = Math.floor(Math.random() * 15);
  for (i = 0; i < idLength; i++) {
    let num = Math.floor(Math.random() * carac.length);
    id += carac[num];
  }
  return id;
}
id = randomUserIp();
console.log(id);

// Escreva uma função que gere um randomMacAddress

//Declare um nome de função userIdGenerator . Quando esta função é chamada, ela gera um ID de sete caracteres. A função retorna o id.
function userIdGenerator(x) {
  id = '';
  for (i = 0; i < x; i++) {
    let num = Math.floor(Math.random() * carac.length);
    id += carac[num];
  }
  return id;
}
console.log('***');
id = userIdGenerator(7);
console.log(id);

// EX 03

//Modifique a função userIdGenerator . Declare um nome de função userIdGeneratedByUser . Não aceita nenhum parâmetro, mas requer duas entradas usando prompt(). Uma das entradas é o número de caracteres e a segunda entrada é o número de ids que devem ser gerados.

// function userIdGeneratedByUser() {
//   let numberCarac = prompt();
//   let numberIds = prompt();
//   for (j = 0; j < numberIds; j++) {
//     console.log(userIdGenerator(numberCarac));
//   }
//   return;
// }

// userIdGeneratedByUser();

//Escreva um nome de função rgbColorGenerator e ela gera cores RGB.

function rgbColorGenerator() {
  return [
    Math.round(Math.random() * 256),
    Math.round(Math.random() * 256),
    Math.round(Math.random() * 256),
  ];
}

let rgb = rgbColorGenerator();
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);

// Escreva uma função arrayOfHexaColors que retorne qualquer número de cores hexadecimais em um array.
//

// Escreva uma função arrayOfRgbColors que retorne qualquer número de cores RGB em um array.
function arrayOfRgbColors(x, y, z) {
  rgb = [x, y, z];
  return rgb;
}
console.log(arrayOfRgbColors(x, y, z));
// Escreva uma função convertHexaToRgb que converte a cor hexa em rgb e retorna uma cor rgb.
//
// Escreva uma função convertRgbToHexa que converte rgb em cor hexa e retorna uma cor hexa.
//
// Escreva uma função generateColors que pode gerar qualquer número de cores hexa ou rgb.
//

//Chame sua função shuffleArray , ela recebe um array como parâmetro e retorna um array embaralhado
function shuffleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Retornando array com aleatoriedade
  return arr;
}

var arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr));

//Chame sua função factorial , ela recebe um número inteiro como parâmetro e retorna um fatorial do número
function fatorial(x) {
  let fat = 1;
  for (i = 0; i < x; i++) {
    fat = fat * (i + 1);
  }
  return fat;
}

console.log(fatorial(4));

//Chame sua função isEmpty , ela pega um parâmetro e verifica se está vazia ou não
function isEmpty(x) {
  if (typeof x == null || x == undefined || x == '') {
    return 'Está vazia';
  } else {
    return 'Tem contéudo';
  }
}
console.log(isEmpty(''));

//Chame sua função sum , ela recebe qualquer número de argumentos e retorna a soma.
//Escreva uma função chamada sumOfArrayItems , ela recebe um parâmetro de array e retorna a soma de todos os itens.
//Verifique se todos os itens da matriz são tipos numéricos. Se não, dê um feedback razoável.

function sumOfArrayItems(arr) {
  let soma = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'number')
      return `O array não é completamente númerico '${
        arr[i]
      }' é do tipo ${typeof arr[i]}`;
  }
  for (i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

console.log(sumOfArrayItems([10, 20, 30]));

// Escreva uma função chamada média , ela recebe um parâmetro de array e retorna a média dos itens.
//Verifique se todos os itens da matriz são tipos numéricos. Se não, dê um feedback razoável.

function media(arr) {
  let soma = sumOfArrayItems(arr);
  if (typeof soma == 'string') {
    return 'Array não numérico';
  } else {
    return soma / arr.length;
  }
}

console.log(media([10, 20, 30, 40]));

//Escreva uma função chamada modificarArray que pega o array como parâmetro e modifica o quinto item do array e retorna o array.
//Se o comprimento do array for menor que cinco, ele retornará 'item não encontrado'.

function modifyArray(arr) {
  if (arr.length < 5) {
    return 'item não encontrado';
  } else {
    arr[4] = arr[4].toUpperCase();
  }
  return arr;
}

console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

//Escreva uma função chamada isPrime , que verifica se um número é primo.
function isPrime(x) {
  for (i = 2; i < x; i++) {
    if (x % i == 0) {
      return 'N eh primo';
    }
  }
  return 'Eh primo';
}
console.log(isPrime(2));

//Escreva uma função que verifique se todos os itens são únicos no array.

function verifyUniq(x) {
  for (i = 0; i < x.length; i++) {
    for (j = 0; j < x.length; j++) {
      if (i == j) {
        continue;
      } else if (x[i] == x[j]) {
        return 'N eh composto de números unicos';
      }
    }
  }
  return 'eh composto de números unicos';
}

console.log(verifyUniq([1, 2, 3, 4, 5, 6, 7, 2]));

// Escreva uma função que verifique se todos os itens do array são do mesmo tipo de dados.
function verifyUniq(x) {
  for (i = 0; i < x.length; i++) {
    for (j = 0; j < x.length; j++) {
      if (i == j) {
        continue;
      } else if (typeof x[i] != typeof x[j]) {
        return 'N eh composto de elementos do mesmo tipo';
      }
    }
  }
  return 'eh composto de elementos do mesmo tipo';
}

console.log(verifyUniq([1, 2, 3, 4, 5, 6, 7, 2, '1']));

//O nome da variável JavaScript não suporta caracteres ou símbolos especiais, exceto $ ou _.
//Escreva uma função isValidVariable que verifica se uma variável é válida ou inválida.
function isValidVariable(x) {
  let caracteres = /[@#!%&;]/gi;
  if (x.match(caracteres) != null) {
    return 'n eh valida';
  } else {
    return 'eh valida';
  }
}

let varibl = 'banana!';
console.log(`${varibl} ${isValidVariable(varibl)}`);

//Escreva uma função que retorne uma matriz de sete números aleatórios em um intervalo de 0 a 9.
// Todos os números devem ser únicos.
arr = [];
function randomNumber() {
  while (arr.length < 7) {
    x = Math.round(Math.random() * 9);
    if (arr.indexOf(x) == -1) {
      arr.push(x);
    }
  }
  return console.log(arr);
}

randomNumber();
