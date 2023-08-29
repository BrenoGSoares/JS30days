// Declare um array vazio ;
let arr = [];
console.log(arr);

// Declare um array com mais de 5 números de elementos
arr = ['a', 1, { meuNome: 'Breno', meuPais: 'Brasil' }, [1, 2, 3], undefined];

// Encontre o comprimento do seu array
console.log(arr.length);

// Obtenha o primeiro item, o item do meio e o último item do array[]
console.log(arr[0], arr[Math.floor(arr.length / 2)], arr[arr.length - 1]);

// Declare um array chamado mixedDataTypes , coloque diferentes tipos de dados no array e encontre o comprimento do array. O tamanho da matriz deve ser maior que 5
let mixedDataTypes = (arr = [
  'a',
  1,
  { meuNome: 'Breno', meuPais: 'Brasil' },
  [1, 2, 3],
  undefined,
  'qualquer coisa',
]);

// Declare uma variável de array com o nome itCompanies e atribua valores iniciais Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon
let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// Imprima o array usando console.log()
console.log(itCompanies);

// Imprima o número de empresas na matriz
console.log(itCompanies.length);

// Imprima a primeira empresa, a empresa intermediária e a última empresa]
console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

// Imprima cada empresa
console.log(itCompanies.join(' '));

// Altere o nome de cada empresa para letras maiúsculas, uma por uma, e imprima-as
console.log(itCompanies.join(' ').toUpperCase());

// Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
console.log(itCompanies.join(', '), 'são grandes empresas de TI.');

// Verifique se existe uma determinada empresa no array itCompanies. Se existir, devolva a empresa, caso contrário, retorne, a empresa não foi encontrada
let index = itCompanies.indexOf('Samsung');
if (index == -1) {
  console.log('a empresa não foi encontrada');
} else {
  console.log(itCompanies[index]);
}

// Filtre as empresas que possuem mais de um 'o' sem o método de filtro
// --------------

// Classifique o array usando o método sort()
itCompanies.sort();
console.log(itCompanies);

// Inverta a matriz usando o método reverse()
itCompanies.reverse();
console.log(itCompanies);

// Separe as 3 primeiras empresas da matriz
console.log(itCompanies.slice(0, 3));

// Divida as últimas 3 empresas da matriz
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// Separe a empresa ou empresas intermediárias de TI do array
console.log(
  itCompanies.slice(
    Math.floor(itCompanies.length / 2),
    Math.floor(itCompanies.length / 2) + 1
  )
);

// Remova a primeira empresa de TI da matriz
console.log(itCompanies.shift());

// Remova a empresa ou empresas intermediárias de TI da matriz
console.log(itCompanies);
if (itCompanies.length % 2 == 0) {
  itCompanies.splice(Math.floor(itCompanies.length / 2 - 1), 2);
  console.log(itCompanies);
} else {
  itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
  console.log(itCompanies);
}

// Remova a última empresa de TI da matriz
console.log(itCompanies.pop());

// Remova todas as empresas de TI
itCompanies = [];
console.log(itCompanies);

// EX 02

// Crie um arquivo country.js separado e armazene a matriz de países neste arquivo, crie um arquivo separado web_techs.js e armazene a matriz webTechs neste arquivo. Acesse ambos os arquivos no arquivo main.js
console.log(countries);
console.log(webTechs);

// Primeiro remova todas as pontuações e mude a string para array e conte o número de palavras no array

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '');
console.log(words);
words = words.split(' ');
console.log(words);
console.log(words.length);

// No carrinho de compras a seguir, adicione, remova, edite itens
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let alergico = true;

// adicione 'Carne' no início do seu carrinho de compras se ainda não tiver sido adicionado
// adicione açúcar no final do carrinho de compras, se ainda não tiver sido adicionado
// remova 'Honey' se você é alérgico a mel
// modificar Chá para 'Chá Verde'

index = shoppingCart.indexOf('Carne');
if (index == -1) {
  shoppingCart.unshift('Carne');
} else {
  None;
}

index = shoppingCart.indexOf('açucar');
if (index == -1) {
  shoppingCart.push('açucar');
} else {
  None;
}

if (alergico) {
  let pHoney = shoppingCart.indexOf('Honey');
  shoppingCart.splice(pHoney, 1);
} else {
  None;
}

let tea = shoppingCart.indexOf('Tea');
tea != -1 ? (shoppingCart[tea] = 'Chá Verde') : None;

console.log(shoppingCart);

// Na matriz de países, verifique se 'Etiópia' existe na matriz, se existir, imprima 'ETIÓPIA'. Se não existir, adicione à lista de países.

index = countries.indexOf('Ethiopia');
index != -1 ? console.log('Ethiopia') : countries.push('Ethiopia');

// No array webTechs verifique se Sass existe no array e se existir imprima 'Sass é um pré-processo CSS'. Se não existir, adicione Sass ao array e imprima o array.

index = webTechs.indexOf('Sass');
index != -1 ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass'),
  console.log(webTechs);

//Concatene as duas variáveis ​​a seguir e armazene-as em uma variável fullStack.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// EX 03

// A seguir está uma matriz de 10 idades de alunos:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Classifique a matriz e encontre a idade mínima e máxima
ages.sort();
console.log(
  `A idade mínima é ${ages[0]} e a máxima é ${ages[ages.length - 1]}`
);
// Encontre a idade mediana (um item do meio ou dois itens do meio divididos por dois)
if (ages.length % 2 == 0) {
  console.log(
    `A mediana de ${ages[Math.floor(ages.length / 2) - 1]} e ${
      ages[Math.floor(ages.length / 2)]
    } é ${
      (ages[Math.floor(ages.length / 2) - 1] +
        ages[Math.floor(ages.length / 2)]) /
      2
    }`
  );
} else {
  console.log(
    `A mediana de ${ages[Math.floor(ages.length / 2)]} é ${
      ages[Math.floor(ages.length / 2)] / 2
    }`
  );
}

// Encontre a idade média (todos os itens divididos pelo número de itens)
// -----------
const sumAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumAges / ages.length;

console.log('Idade média:', averageAge);

// Encontre a faixa de idades (máximo menos mínimo)
console.log(`A faixa é  ${ages[ages.length - 1] - ages[0]}`);

// Compare o valor de (mínimo - média) e (máximo - média), use o método abs() 1. Divida os primeiros dez países da matriz de países
console.log(
  `Min - med =  ${Math.abs(ages[0] - averageAge)} e Max - med = ${Math.abs(
    ages[ages.length - 1] - averageAge
  )}`
);

//1. Divida os primeiros dez países da matriz de países
let newCount = countries.slice(0, 10);
console.log(newCount);

//2. Encontre o(s) país(es) intermediário(s) na matriz de países

if (countries.length % 2 == 0) {
  console.log(
    `Os países são ${countries[Math.floor(countries.length / 2) - 1]} e ${
      countries[Math.floor(countries.length / 2)]
    }`
  );
} else {
  console.log(`O país é ${countries[Math.floor(countries.length / 2)]}`);
}

//3. Divida a matriz de países em duas matrizes iguais, se for par. Se a matriz de países não for par, mais um país para o primeiro semestre.
if (countries.length % 2 == 0) {
  newCount = countries.slice(0, countries.length / 2);
  console.log(newCount);
  newCount = countries.slice(countries.length / 2);
  console.log(newCount);
} else {
  countries.push('Brazil');
  newCount = countries.slice(0, countries.length / 2);
  console.log(newCount);
  newCount = countries.slice(countries.length / 2);
  console.log(newCount);
}
