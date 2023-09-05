// EX 01

const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Explique a diferença entre forEach, map, filter e reduza .
// forEach : Este método é utilizado para iterar cada elemento de um array, e somente de arrays. Ele não retorna um novo array nem valores modificados.
// map: Este método itera sobre cada elemento, mas, ao contrário do forEach, irá modificá-los e inseri-los em um array modificado.
// filter : Filtra os elementos que satisfazem determinadas condições, ele retorna um novo array.
// reduce :  Reduce é usado quando você deseja agregar ou reduzir os elementos de um array a um único valor.

// Defina uma função de retorno de chamada antes de usá-la em forEach, mapear, filtrar ou reduzir.
function callbackFunction(item) {
  console.log(item);
}

numbers.forEach(callbackFunction);
numbers.map(callbackFunction);
console.log(numbers.filter((item) => item % 2 == 0));

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// Use forEach para console.log cada país na matriz de países.
countries2.forEach(callbackFunction);

// Use forEach para console.log cada nome na matriz de nomes.
names.forEach(callbackFunction);

// Use forEach para console.log cada número na matriz de números.
numbers.forEach(callbackFunction);

// Use map para criar uma nova matriz alterando cada país para letras maiúsculas na matriz de países.
const toUpperCountry = countries2.map((country) => country.toUpperCase());
console.log(toUpperCountry);

// Use o mapa para criar uma matriz de comprimento de países a partir da matriz de países.
const mapLengthCountry = countries2.map((country) => country.length);
console.log(mapLengthCountry);

// Use o mapa para criar uma nova matriz alterando cada número para quadrado na matriz de números
const squaredNumber = numbers.map((number) => number ** 2);
console.log(squaredNumber);

// Use map para alterar cada nome para letras maiúsculas na matriz de nomes
const toUpperNames = names.map((name) => name.toUpperCase());
console.log(toUpperNames);

// Use map para mapear a matriz de produtos com seus preços correspondentes.
const priceProduct = products.map((product) => {
  return { ...product, price: parseFloat(product.price) || 0 };
});
console.log(priceProduct);

// Use o filtro para filtrar países que contenham land.
const haveLand = toUpperCountry.filter((country) => country.includes('LAND'));
console.log(haveLand);

// Use o filtro para filtrar países com seis caracteres.
const filterLengthCoutry = countries2.filter((country) => country.length === 6);
console.log(filterLengthCoutry);

// Use o filtro para filtrar países que contenham seis letras ou mais na matriz de países.
const filterLengthCoutrymore = countries2.filter(
  (country) => country.length >= 6
);
console.log(filterLengthCoutrymore);

// Use o filtro para filtrar o país que começa com 'E';
const startsECoutry = countries2.filter((country) => country.startsWith('E'));
console.log(startsECoutry);

// Use filtro para filtrar apenas preços com valores.
const priceTrue = products.filter((products) => products.price > 0);
console.log(priceTrue);

// Declare uma função chamada getStringLists que recebe um array como parâmetro e então retorna um array apenas com itens de string.]
function getStringLists(arr) {
  const verifyType = arr.filter((type) => typeof type === 'string');
  return verifyType;
}

let arr = ['1', 2, '3', 5];
console.log(getStringLists(arr));
// Use reduzir para somar todos os números na matriz de números.
const sumOfAllNumbers = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumOfAllNumbers);

// Use reduzir para concatenar todos os países e produzir esta frase: Estônia, Finlândia, Suécia, Dinamarca, Noruega e Islândia são países do norte da Europa
const concatenatedCountries2 = countries2.reduce(
  (accumulator, country, index) => {
    if (index === countries2.length - 1) {
      return `${accumulator} e ${country} são países do norte da Europa`;
    } else {
      return `${accumulator}, ${country}`;
    }
  },
  'Estônia'
);

console.log(concatenatedCountries2);
// Explique a diferença entre alguns e todos
// every verificará se TODOS os elementos são semelhantes em um aspecto
// some verificará se pelo menos UM dos elementos são semelhantes em um aspecto

// Use some para verificar se o comprimento de alguns nomes é maior que sete na matriz de nomes
const nameLength = names.some((name) => name.length > 7);
console.log(nameLength);
// Use cada para verificar se todos os países contêm a palavra land.
const verifyLand = countries2.every((country) =>
  country.toLowerCase().includes('land')
);
console.log(verifyLand);

// Explique a diferença entre find e findIndex .
// Find: Retornará o primeiro ELEMENTO que satifaz a condição.
// FinIndex: Retornará a POSIÇÃO do primeiro elemento que satifaz a condição.

// Use find para encontrar o primeiro país contendo apenas seis letras na matriz de países
const findCountry6 = countries2.find((country) => country.length == 6);
console.log(findCountry6);
// Use findIndex para encontrar a posição do primeiro país contendo apenas seis letras na matriz de países
const findPosiCountry6 = countries2.findIndex((country) => country.length == 6);
console.log(findPosiCountry6);

// Use findIndex para encontrar a posição da Noruega. Se ela não existir no array, você obterá -1.
const noruegaContry = countries2.findIndex((country) => country === 'Norway');
console.log(noruegaContry);

// Use findIndex para encontrar a posição da Rússia. Se ela não existir no array, você obterá -1.
const RussiaContry = countries2.findIndex((country) => country === 'Russia');
console.log(RussiaContry);

// EX 02

// Encontre o preço total dos produtos encadeando dois ou mais iteradores de array (por exemplo, arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .filter((products) => {
    return products.price > 0;
  })
  .map((products) => products.price)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalPrice);

// Encontre a soma do preço dos produtos usando apenas reduzir reduzir (retorno de chamada))
const totalPriceReduce = products.reduce((accumulator, product) => {
  const price = parseFloat(product.price);
  return isNaN(price) ? accumulator : accumulator + price;
}, 0);
console.log(totalPriceReduce);

// Declare uma função chamadacatecateCountries2 que retorna uma matriz de países que possuem algum padrão comum (você encontra a matriz de países neste repositório como países.js
//(por exemplo, 'land', 'ia', 'island','stan')).

function categorizeCountrie(str) {
  const haveStr = countries.filter((country) => {
    const nameCountry = country.name;
    return nameCountry.toUpperCase().includes(str.toUpperCase());
  });
  return haveStr;
}

console.log(categorizeCountrie('land'));

// Crie uma função que retorne um array de objetos, que é a letra e o número de vezes que a letra começa com o nome de um país.
function starts(letter) {
  const letterNumber = countries.reduce((accumulator, country) => {
    const nameCountry = country.name;
    if (letter.toUpperCase() === nameCountry[0].toUpperCase()) {
      return (accumulator += 1);
    }
    return accumulator;
  }, 0);
  return { letter: letter, amoutLetter: letterNumber };
}

console.log(starts('B'));
// Declare uma função getFirstTenCountries2 e retorne uma matriz de dez países. Use programação funcional diferente para trabalhar no array country.js
function getFirstTenCountries2() {
  return countries.slice(0, 10);
}

console.log(getFirstTenCountries2());

// Declare uma função getLastTenCountries2 que retorna os últimos dez países na matriz de países.
function getLastTenCountries2() {
  return countries.slice(countries.length - 10);
}

console.log(getLastTenCountries2());

// Descubra qual letra é usada muitas vezes como inicial para o nome de um país na matriz de países (por exemplo, Finlândia, Fiji, França, etc.)
function startsLetter() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let maiorLetra = '',
    quantidade = 0;
  for (let i = 0; i < letras.length - 1; i++) {
    let info = starts(letras[i]);
    if (info.amoutLetter > quantidade) {
      quantidade = info.amoutLetter;
      maiorLetra = info.letter;
    }
  }
  return maiorLetra;
}
console.log(startsLetter());

// CHAT GPT
function startsLetterd() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const result = letras.split('').reduce(
    (maxLetter, letter) => {
      const info = starts(letter);
      if (info.amoutLetter > maxLetter.amount) {
        return { letter, amount: info.amoutLetter };
      }
      return maxLetter;
    },
    { letter: '', amount: 0 }
  );

  return result.letter;
}

console.log(startsLetterd());
