// EX 01

// Exibir a matriz de países como uma tabela
countriesName = [];
for (let name of countries) {
  countriesName.push(name.name);
}
console.table(countriesName);
// Exibir o objeto países como uma tabela
console.table(countries);

// Use console.group() para agrupar logs
console.group('Names of Coutries');
console.log(countriesName);
console.groupEnd();

console.group('Info of Countries');
console.log(countries);
console.groupEnd();

// EX 02

// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 não eh maior que 20');

// Escreva uma mensagem de aviso usando console.warn()
console.warn('Perigo ! O mestre do Front-End chegou');

// Escreva uma mensagem de erro usando console.error()
console.error('Precisa de mais foco');

// EX 03

//Verifique a diferença de velocidade entre os seguintes loops: while, for, for of, forEach

const countriesList = ['Finland', 'Sweden', 'Norway'];

console.time('While');
let i = 0;
while (i < countriesList.length) {
  console.log(countriesList[i]);
  i += 1;
}
console.timeEnd('While');

console.time('for');
for (i = 0; i < countriesList.length; i++) {
  console.log(countriesList[i]);
}
console.timeEnd('for');

console.time('for of');
for (pais of countriesList) {
  console.log(pais);
}
console.timeEnd('for of');
