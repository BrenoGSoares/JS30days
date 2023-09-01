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

// // // A equação linear é calculada da seguinte forma: ax + by + c = 0 . Escreva uma função que calcule o valor de uma equação linear, solveLinEquation.
// // function solveLinEquation(a, b ,c){
// //     return a*X
// // }

// // // A equação quadrática é calculada da seguinte forma: ax2 + bx + c = 0 . Escreva uma função que calcule o valor ou valores de uma equação quadrática, solveQuadEquation .
