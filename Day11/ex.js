// EX 01
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries2 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

// Desestruturar e atribuir os elementos da matriz de constantes a e, pi, gravidade, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// Desestruturar e atribuir os elementos da matriz de países para fin, est, sw, den, nem
let [fin, est, sw, den, nem] = countries2;
console.log(fin, est, sw, den, nem);

// Desestruturar o objeto retângulo por suas propriedades ou chaves
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

// EX 02

// Itere pela matriz de usuários e obtenha todas as chaves do objeto usando desestruturação
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}
// Encontre as pessoas que têm menos de duas habilidades
const getTwoSkills = (users) => {
  const filteredUsers = users.filter(
    ({ skills }) => skills && skills.length < 2
  );
  return filteredUsers;
};
console.log(getTwoSkills(users));
