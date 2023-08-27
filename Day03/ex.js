// EX 1

// 1 - Declare a variável firstName, lastName, country, city, age, isMarried, year e atribua valor a ela e use o operador typeof para verificar diferentes tipos de dados.
const firstName = 'Breno', lastName = 'Soares'
let country = 'Brasil', city = 'Santo André', age = 21, isMarried ='AindaNão', year = 2023
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)  

// 2 - Verifique se o tipo de '10' é igual a 10
console.log('10' == 10)
console.log('10' === 10)

// 3 - Verifique se parseInt('9.8') é igual a 10
console.log(parseInt('9.8') == 10)
console.log(parseInt('9.8') === 10)

// 4 - O valor booleano é verdadeiro ou falso.
// Escreva três declarações JavaScript que forneçam valor verdadeiro.
console.log(1000 > 3)
console.log(10 === 10)
console.log(parseInt('10')>0)

// Escreva três instruções JavaScript que forneçam valor falso.
console.log('Errado' === 'errado')
console.log(1000 < 3)
console.log(null == 0)

// 5 - Descubra primeiro o resultado da seguinte expressão de comparação sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log()

// 4 > 3     #true *
// 4 >= 3    #true *
// 4 <3      #false *
// 4 <= 3    #false *
// 4 == 4    #true *
// 4 === 4   #true *
// 4! = 4    #false *
// 4! == 4   #false *
// 4! = '4'  #true (false)
// 4 == '4'  #true *
// 4 === '4' #false *
console.log('***  5   ***')
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 <3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('***  5   ***')


// Encontre o comprimento do python e do jargão e faça uma declaração de comparação falsa. (?)

// Descubra primeiro o resultado das seguintes expressões sem usar console.log(). Depois de decidir o resultado, confirme-o usando console.log()

// 4 > 3 && 10 < 12  #true *
// 4 > 3 && 10 > 12  #false *
// 4 > 3 || 10 < 12  #true *
// 4 > 3 || 10 > 12  #true *
// !(4 > 3)          #false *
// !(4 <3)           #true *
// !(false)          #true  *      
// !(4 > 3 && 10 < 12) #false *
// !(4 > 3 && 10 > 12)  #true *
// !(4 === '4')          #true *
// Não há 'ligado' em dragão e python #true

console.log('***  6  ***')
console.log(4 > 3 && 10 < 12 ) 
console.log(4 > 3 && 10 > 12 ) 
console.log(4 > 3 || 10 < 12 ) 
console.log(4 > 3 || 10 > 12 ) 
console.log(!(4 > 3)) 
console.log(!(4 <3)) 
console.log(!(false))        
console.log(!(4 > 3 && 10 < 12)) 
console.log(!(4 > 3 && 10 > 12)) 
console.log(!(4 === '4'))     
console.log('***  6   ***')



// 7 - Use o objeto Date para realizar as seguintes atividades
const now = new Date()
// Qual é o ano hoje?
console.log(now.getFullYear())
// Qual é o mês hoje como um número?
console.log(now.getMonth()+1)
// Qual é a data hoje?
console.log(`${now.getDate()}/${(now.getMonth()+1)}/${now.getFullYear()}`)
// Qual é o dia de hoje como um número?
console.log(now.getDate())
// Qual é o horário agora?
console.log(now.getHours())
// Quais são os minutos agora?
console.log(now.getMinutes())
// Descubra o número de segundos decorridos desde 1º de janeiro de 1970 até agora.
console.log((now.getTime())/1000)


// EX 02

// 1 - Escreva um script que solicite ao usuário que insira a base e a altura do triângulo e calcule a área de um triângulo (área = 0,5 xbxh).
let b = prompt('base')
let h = prompt('heigh')
console.log(`The area of the triangle is ${(b*h)/2}`)

// 2 - Escreva um script que solicite ao usuário que insira o lado a, o lado b e o lado c do triângulo e calcule o perímetro do triângulo (perímetro = a + b + c)
let a = +(prompt('a'))
b = +(prompt('b'))
let c = +(prompt('c'))
console.log(`The perimeter of the triangle is ${a+b+c}`)

// Obtenha o comprimento e a largura usando o prompt e calcule uma área do retângulo (área = comprimento x largura e o perímetro do retângulo (perímetro = 2 x (comprimento + largura))
let length = prompt('length:') 
let width = prompt('width:')
console.log(`The area of rectangle: ${width * length}`)
console.log(`The perimeter of rectangle: ${2 * (width + length)}`)

//Obtenha o raio usando o prompt e calcule a área de um círculo (área = pi xrxr) e a circunferência de um círculo (c = 2 x pi xr) onde pi = 3,14.
let radius = prompt('radius: ')
console.log(`The area of the circle is ${Math.PI * radius **2 }`)
console.log(`The circumference of the circle is ${2 * Math.PI * radius}`)


// Calcule a inclinação, interceptação x e interceptação y de y = 2x -2
const coefa = 2
const coefb = -2

let interx =  2/2
let intery =  2*0 -2
console.log(`inclinação: ${coefa} interx: ${interx} intery: ${intery}`)

// A inclinação é m = (y 2 -y 1 )/(x 2 -x 1 ). Encontre a inclinação entre o ponto (2, 2) e o ponto (6,10)
// Coordenadas dos pontosl
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

// Cálculo da inclinação
let inclinacao = (y2 - y1) / (x2 - x1);

console.log("A inclinação é: " + inclinacao);

// Compare a inclinação das duas perguntas acima.
console.log(coefa === inclinacao)

// Calcule o valor de y (y = x 2 + 6x + 9). Tente usar diferentes valores de x e descubra qual valor de x y é 0.

let x = prompt('Value of x: ')
let y = (x**2 + 6*x + 9)
console.log(`The value of y is ${y}`) //3

//Escreva um script que solicite ao usuário que insira horas e taxa por hora. Calcular o salário da pessoa?
hours = prompt('Enter Hours')
let rate = prompt('Enter Rate por Hour')
console.log(`Your weekly earning is ${hours*rate}`)

//Se o comprimento do seu nome for maior que 7, digamos, seu nome é longo, caso contrário, diga que seu nome é curto.
let myName = 'Breno'
myName.length > 7 ? console.log('Nome Longo'): console.log('Nome Curto')

//Compare o comprimento do seu primeiro nome e o comprimento do seu nome de família e você deverá obter este resultado.
firstName < lastName 
  ? console.log(`My family name, ${lastName} is longer than my name, ${firstName}`)
  : console.log(`My name, ${firstName} is longer than my family name, ${lastName} `)

//Declare duas variáveis ​​myAge e yourAge e atribua a elas valores iniciais e myAge e yourAge.
let myAge = 250
let yourAge = 25
myAge > yourAge
  ? console.log(`I am ${myAge-yourAge} years older than you.`)
  : console.log(`You are ${yourAge-myAge} years older than me. `)

//Usando o prompt, obtenha o ano em que o usuário nasceu e, se o usuário tiver 18 anos ou mais, permita que o usuário dirija, caso contrário, diga ao usuário para esperar um determinado período de anos.
const bornYear = prompt('Enter birth year: ')
age = now.getFullYear() - bornYear
age >= 18
  ? console.log(`You are ${age}. You are old enough to drive`)
  : console.log(`You are ${age}. You will be allowed to drive after ${Math.abs(age-18)} years`)

//Escreva um script que solicite ao usuário que insira o número de anos. Calcule o número de segundos que uma pessoa pode viver. Suponha que alguém viva apenas cem anos  

year = prompt('Enter number of years you live: ')
console.log(`You lived ${year * 31557600} seconds`) 

// Crie um formato de hora legível por humanos usando o objeto Data e hora
// AAAA-MM-DD HH:mm
// DD-MM-AAAA HH:mm
// DD/MM/AAAA HH:mm

console.log(`${now.getDate()}-${(now.getMonth()+1)}-${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()}`)  
console.log(`${now.getDate()}/${(now.getMonth()+1)}/${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()}`)  

// EX 03

// Crie um formato de hora legível por humanos usando o objeto Date time. A hora e os minutos devem ter dois dígitos (7 horas devem ser 07 e 5 minutos devem ser 05)
// AAA-MM-DD HH:mm, por exemplo. 02-01-20120 07:05
let minutes = now.getMinutes()
let hours = now.getHours()
minutes <= 9 ? (minutes = '0' + minutes): minutes
hours <= 9 ? (hours = '0' + hours): hours

console.log(`${now.getFullYear()}-${(now.getMonth()+1)}-${now.getDate()}  ${hours}:${minutes}`)  