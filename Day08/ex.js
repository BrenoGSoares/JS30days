// EX 01

// Crie um objeto vazio chamado cachorro
const cachorro = {};

// Imprima o objeto cachorro no console
console.log(cachorro);

// Adicione propriedades de nome, pernas, cor, idade e casca para o objeto cachorro. A propriedade casca é um método que retorna woof woof
cachorro.name = 'Costelinha';
cachorro.legs = 4;
cachorro.color = 'black';
cachorro.age = 2;
cachorro.bark = function () {
  return 'woof woof';
};

// Obtenha nome, pernas, cor, idade e valor da casca do objeto cachorro
console.log(cachorro.name);
console.log(cachorro.legs);
console.log(cachorro.color);
console.log(cachorro.age);
console.log(cachorro.bark());
const values = Object.values(cachorro);
console.log(values);

// Defina novas propriedades para o objeto cachorro: raça, getDogInfo
cachorro.breed = 'golden retriever';
cachorro.getDogInfo = function () {
  return `O nome é ${this.name} tem ${this.age} anos e é da raça ${this.breed}`;
};

console.log(cachorro.getDogInfo());

// EX 02

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Encontre a pessoa que possui muitas habilidades no objeto de usuários.
function moreSkills() {
  const people = Object.keys(users);
  console.log(people);
  const valuesSkills = Object.entries(users.Thomas.skills);
  console.log(valuesSkills);
}

moreSkills();

// Contar usuários logados, contar usuários com mais de 50 pontos do objeto a seguir.
