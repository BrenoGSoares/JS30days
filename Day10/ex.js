// EX 01

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries2 = ['Finland', 'Sweden', 'Norway'];

// Crie um conjunto vazio
const conjuntoVazio = new Set();
console.log(conjuntoVazio);

// Crie um conjunto contendo 0 a 10 usando loop
const conjunto0to10 = new Set();
for (let i = 0; i <= 10; i++) {
  conjunto0to10.add(i);
}
console.log(conjunto0to10);

// Remover um elemento de um conjunto
conjunto0to10.delete(0);
console.log(conjunto0to10);

// Limpar um conjunto
conjunto0to10.clear();
console.log(conjunto0to10);

// Crie um conjunto de 5 elementos de string do array
teAmo = ['Eu', 'amo', 'o', 'José', 'Weverton '];
const felizNossoDia = new Set();

for (const amor of teAmo) {
  felizNossoDia.add(amor);
}
console.log(felizNossoDia);

// Crie um mapa de países e o número de caracteres de um país
const result = countries2.reduce((acumulador, pais) => {
  acumulador.push([pais, pais.length]);
  return acumulador;
}, []);

const mapPaises = new Map(result);
console.log(mapPaises);

// EX 02

// Encontre a união b
let c = [...a, ...b];
let union = new Set(c);
console.log(union);

// Encontre a interseção b
let A = new Set(a),
  B = new Set(b);

let intersecao = new Set(a.filter((num) => B.has(num)));
console.log(intersecao);

// Encontre a com b
let aWithB = new Set(a.filter((num) => !B.has(num)));
console.log(aWithB);

// EX 03

//Quantos idiomas existem no arquivo objeto de países.
// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l)
//   console.log(filteredLang) // ["English", "English", "English"]
//   counts.push({ lang: l, count: filteredLang.length })
// }
// console.log(counts)

let lang = [];

for (const objeto of countries) {
  if (objeto.languages) {
    if (Array.isArray(objeto.languages)) {
      lang.push(...objeto.languages);
    } else {
      lang.push(objeto.languages);
    }
  }
}

let linguas = new Set(lang);
console.log(`Existem ${linguas.size} idiomas no arquivo`);

// *** Use os dados dos países para encontrar os 10 idiomas mais falados:
function mostSpokenLanguages(arr, num) {
  const languageCounts = {};
  for (const language of arr) {
    if (languageCounts[language]) {
      languageCounts[language] += 1;
    } else {
      languageCounts[language] = 1;
    }
  }
  const sortedLang = Object.fromEntries(
    Object.entries(languageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, num)
  );
  return sortedLang;
}

const mostSpoken = mostSpokenLanguages(lang, 3);
console.log([mostSpoken]);
