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
  const skillsArray = [];
  let tam = 0,
    maior = '';
  for (const personName in users) {
    if (users.hasOwnProperty(personName)) {
      const skills = [users[personName].skills];
      skillsArray.push(...skills);
    }
  }
  console.log(skillsArray.length);
  for (let i = skillsArray.length - 1; i >= 0; i--) {
    console.log(i);
    if (skillsArray[i].length > tam) {
      tam = skillsArray[i].length;
      maior = people[i];
    }
  }
  return maior;
}

console.log(moreSkills());

// Contar usuários logados, contar usuários com mais de 50 pontos do objeto a seguir.
function onUsers() {
  const numberOn = [];
  const numberLogged = [];
  for (const personName in users) {
    if (users[personName].points >= 50) {
      numberOn.push(personName);
    }
    if (users[personName].isLoggedIn) {
      numberLogged.push(personName);
    }
  }
  return `Tem ${numberLogged.length} usuários logados e tem ${numberOn.length} usários com mais de 50 pontos logados ou não`;
}

console.log(onUsers());

// Encontre pessoas que sejam desenvolvedores de pilha MERN(MongoDB, Express, React and Node) no objeto de usuários
function MERN() {
  const requiredSkills = ['MongoDB', 'Express', 'React', 'Node'];
  const devMERN = [];
  for (const personName in users) {
    const skills = users[personName].skills;
    let hasAllSkills = true;
    for (const skill of requiredSkills) {
      if (!skills.includes(skill)) {
        hasAllSkills = false;
        break;
      }
    }
    if (hasAllSkills) {
      console.log(personName);
      devMERN.push(personName);
    }
  }

  return devMERN;
}

console.log(MERN());
// Defina seu nome no objeto de usuários sem modificar o objeto de usuários original
const copyUsers = Object.assign({}, users);
copyUsers.Breno = {
  email: 'qualquer@qualquer.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'React', 'Node'],
  age: 22,
  isLoggedIn: false,
  points: 100,
};
console.log(copyUsers.Breno);
// Obtenha todas as chaves ou propriedades do objeto de usuários
const keys = Object.keys(users);
console.log(keys);

// Obtenha todos os valores do objeto de usuários
const val = Object.values(users);
console.log(val);

// Use o objeto países para imprimir o nome de um país, capital, populações e idiomas.
const meuPais = countries.find(function (objeto) {
  return objeto.name === 'Brazil';
});

console.log(meuPais.name);
console.log(meuPais.capital);
console.log(meuPais.population);
console.log(meuPais.languages);

// EX 03

// Crie um objeto literal chamado personAccount . Possui propriedades firstName, lastName, rendimentos, despesas e possui métodos totalIncome, totalExpense, accountInfo,
// addIncome, addExpense e accountBalance . As receitas são um conjunto de receitas e sua descrição e as despesas são um conjunto de receitas e sua descrição.
// const personAccount = {
//   firstName: 'Fulano',
//   lastName: 'Beltrano',
//   incomes: {
//     nomeReceita: 0,
//     descricaoReceita: 'bla bla bla',
//   },
//   expenses: {
//     nomeDespesa: 0,
//     descricaoDespesa: 'bla bla bla',
//   },
//   totalIncome: function () {
//     [(tam = Object.keys(this.incomes))].length;
//     return tam;
//   },
//   totalExpense: function () {
//     [(tam = Object.keys(this.expenses))].length;
//     return tam;
//   },
//   accountInfo: function () {
//     const theName = Object.keys(this.firstName);
//     const theLastName = Object.keys(this.lastName);
//     const theIncomes = Object.keys(this.incomes);
//     const theExpenses = Object.keys(this.expenses);
//     return `Nome:${theName} Sobrenome:${theLastName} Receita:${theIncomes} ${theExpenses}`;
//   },
//   addIncome: function (nomereceita, valorreceita, nomedescr, valordescr) {
//     personAccount.incomes.nomereceita = valorreceita;
//     personAccount.incomes.nomedescr = valordescr;
//   },
//   addExpense: function () {},
//   accountBalance: function () {},
// };

// **** As perguntas: 2, 3 e 4 são baseadas nas duas matrizes a seguir: usuários e produtos ()
const users2 = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

// Imagine que você está obtendo a coleção de usuários acima de um banco de dados MongoDB.
// a. Crie uma função chamada signUp que permite ao usuário adicionar itens à coleção. Se existir usuário, informe ao usuário que ele já possui uma conta.
// b. Crie uma função chamada signIn que permite ao usuário fazer login no aplicativo

function signUp(newUser, newEmail, newPassord) {
  for (let i = 0; i < users2.length; i++) {
    if (newUser == users2[i].username) {
      return `Você já está cadastrado pelo username: ${users2[i].username}`;
    }
  }
  users2.push({
    _id: userIdGenerator(5),
    username: newUser,
    email: newEmail,
    password: newPassord,
    createdAt: dateGenerator(),
    isLoggedIn: false,
  });
}

function signIn(username) {
  for (let i = 0; i < users2.length; i++) {
    if (username == users2[i].username) {
      users2[i].isLoggedIn = true;
      break;
    }
  }
}

console.log(signUp('Thomas', 'Qualquer@gmail.com', '999999'));

console.log(users2);

//A matriz de produtos possui três elementos e cada um deles possui seis propriedades. a. Crie uma função chamada rateProduct que avalia o produto b. Crie uma função chamada AverageRating que calcula a avaliação média de um produto

//Crie uma função chamada likeProduct. Esta função ajudará a curtir o produto caso ele não seja apreciado e a remover like se tiver sido apreciado.
