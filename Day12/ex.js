// EX 01

// Calcule a renda anual total da pessoa a partir do texto a seguir. 'Ele ganha 4.000 euros de salário por mês, 10.000 euros de bônus anual, 5.500 euros de cursos online por mês.'
let text =
  'Ele ganha 4.000 euros de salário por mês, 10.000 euros de bônus anual, 5.500 euros de cursos online por mês.';
let matches = text.replace(/[.]/g, '');
let pattern = /\d+/g;
matches = matches.match(pattern);
console.log(
  `Sua renda anual é: ${
    parseInt(matches[0]) * 12 + parseInt(matches[1]) + parseInt(matches[2]) * 12
  } euros`
);

// A posição de algumas partículas no eixo horizontal x é a seguinte: -12, -4, -3 e -1 na direção negativa, 0 na origem, 4 e 8 na direção positiva.
// Extraia esses números e encontre a distância entre as duas partículas mais distantes.
text =
  'A posição de algumas partículas no eixo horizontal x é a seguinte: -12, -4, -3 e -1 na direção negativa, 0 na origem, 4 e 8 na direção positiva.';
pattern = /-?\d+/g; //Com ou sem o sinal
matches = text.match(pattern);

if (matches.length >= 2) {
  const numericMatches = matches.map(Number);
  numericMatches.sort((a, b) => a - b); // Ordena os números em ordem crescente
  const distance =
    numericMatches[numericMatches.length - 1] - numericMatches[0];
  console.log('Distância entre as duas partículas mais distantes:', distance);
}

//Escreva um padrão que identifique se uma string é uma variável JavaScript válida
function is_valid_variable(str) {
  let patterSimb = /[.,!@#%&*()-]/;
  let patterNumb = /^[{0-9}]/;
  if (patterSimb.test(str) || patterNumb.test(str)) {
    return false;
  }
  return true;
}

console.log(is_valid_variable('firstname'));

// EX 02

//Escreva uma função chamada tenMostFrequentWords que obtém as dez palavras mais frequentes de uma string?
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
function tenMostFrequentWords(paragraph) {
  pattern = /\b[a-zA-z]+\b/g;
  const wordCounts = { word: '', count: 0 };
  let listOfWords = paragraph.match(pattern);
  for (const word of listOfWords) {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  // Converter o objeto em uma matriz de objetos
  const wordArray = [];
  for (const word in wordCounts) {
    wordArray.push({ word: word, count: wordCounts[word] });
  }

  wordArray.sort((a, b) => b.count - a.count);
  console.log(wordArray.slice(0, 10));
}

console.log(tenMostFrequentWords(paragraph));
