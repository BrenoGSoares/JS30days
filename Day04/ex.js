// 01

// 1- Obtenha a entrada do usuário usando prompt (“Digite sua idade:”).
//Se o usuário tiver 18 anos ou mais, dê feedback: 'Você tem idade suficiente para dirigir',
//mas se não tiver 18 anos, dê outro feedback informando que deve esperar o número de anos que ele precisa para completar 18 anos.

// let yourAge = prompt('Enter your age: ');
// if (yourAge >= 18) {
//   console.log('You are old enough to drive.');
// } else {
//   console.log(`You are left with ${Math.abs(yourAge - 18)} years to drive.`);
// }

// 2 - Compare os valores de myAge e yourAge usando if… else. Com base na comparação e registre o resultado no console informando quem é mais velho (eu ou você). Use prompt(“Digite sua idade:”) para obter a idade como entrada.

// let myAge = prompt('My age is: ');
// if (myAge > yourAge) {
//   console.log(`I am ${myAge - yourAge} years older than you.`);
// } else {
//   console.log(`You are ${yourAge - myAge} years older than me.`);
// }

// 3 - Se a for maior que b, retorne 'a é maior que b', caso contrário, 'a é menor que b'. Tente implementá-lo de maneiras

let a = 5,
  b = 5;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

// 4 - Os números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?

let ehPar = a % 2;
if (ehPar == 0) {
  console.log(`${a} is an even number`);
} else {
  console.log(`${a} is not an even number`);
}

// 02 EX

// Escreva um código que possa dar notas aos alunos de acordo com suas pontuações:
// let nota = prompt('Digite sua pontuação de 0-100: ');

// if (nota > 79) {
//   console.log('A');
// } else if (nota > 69) {
//   console.log('B');
// } else if (nota > 59) {
//   console.log('C');
// } else if (nota > 49) {
//   console.log('D');
// } else {
//   console.log('F');
// }

// Verifique se a estação é Outono, Inverno, Primavera ou Verão. Se a entrada do usuário for:

let mes = 'queijo';

switch (mes) {
  case 'setembro':
  case 'outubro':
  case 'novembro':
    console.log('Outono');
    break;
  case 'dezembro':
  case 'janeiro':
  case 'fevereiro':
    console.log('Inverno');
    break;
  case 'março':
  case 'abril':
  case 'maio':
    console.log('primavera');
    break;
  case 'junho':
  case 'julho':
  case 'agosto':
    console.log('verão');
    break;
  default:
    console.log('Inválido');
}

// 3 - Verifique se um dia é fim de semana ou dia útil. Seu script levará o dia como entrada.

// let dayOfWeek = prompt('Que dia é hoje?');

// switch (dayOfWeek) {
//   case 'segunda':
//     console.log('Dia útil');
//     break;
//   case 'terça':
//     console.log('Dia útil');
//     break;
//   case 'quarta':
//     console.log('Dia útil');
//     break;
//   case 'quinta':
//     console.log('Dia útil');
//     break;
//   case 'sexta':
//     console.log('Dia útil');
//     break;
//   case 'sábado':
//     console.log('Fim de semana');
//     break;
//   case 'domingo':
//     console.log('Fim de semana');
//     break;
//   default:
//     console.log('Inválido');
// }
