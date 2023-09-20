// Exercícios: Nível 1
// Crie um fechamento que tenha uma função interna
function funEx(n) {
  let square = 0;
  function funIn(n) {
    square = n ** 2;
    return square;
  }
  return funIn(n);
}

const a = funEx(2);

console.log(a);
// Exercícios: Nível 2
// Crie um fechamento que tenha três funções internas
function funExName() {
  let name = 'Breno';
  function funInLast() {
    name += ' Soares';
    return name;
  }
  function age() {
    name += ' 17 years';
    return name;
  }
  function country() {
    name += ' live in Brazil';
    return name;
  }

  return {
    funInLast: funInLast(),
    age: age(),
    country: country(),
  };
}

console.log(funExName().country);

// Exercícios: Nível 3
// Crie uma função personAccount out. Possui variáveis ​​internas nome, sobrenome, receitas, despesas. Possui funções internas totalIncome, totalExpense, accountInfo, addIncome, addExpense e accountBalance. As receitas são um conjunto de receitas e sua descrição e as despesas também são um conjunto de despesas e sua descrição.
