// EX 1


//Declare uma variável chamada desafio e atribua a ela um valor inicial '30 Days Of JavaScript' .
let desafio = '30 Days Of JavaScript'

// Imprima a string no console do navegador usando console.log()
console.log(desafio)

// Imprima o comprimento da string no console do navegador usando console.log()
console.log(desafio.length)

// Altere todos os caracteres da string para letras maiúsculas usando o método toUpperCase()
desafio4 = desafio.toUpperCase()
console.log(desafio4)

// Altere todos os caracteres da string para letras minúsculas usando o método toLowerCase()
desafio5 = desafio.toLowerCase()
console.log(desafio5)

// Corte (corte) a primeira palavra da string usando o método substr() ou substring()
let str = desafio.substring(3,7)
console.log(str)

// Divida a frase Days Of JavaScript de 30 Days Of JavaScript
let str2 = desafio.substring(2, desafio.length)
console.log(str2)

// Verifique se a string contém uma palavra Script usando o método include()
console.log(desafio.includes('Script'))

// Divida a string em um array usando o método split()
let newArray = desafio.split()
console.log(newArray)

// Divida a string 30 dias de JavaScript no espaço usando o método split()
str = '30 Days Of at space'
newArray = str.split(' ')
console.log(newArray)

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide a string na vírgula e altera-a para um array.
str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
newArray = str.split(', ')
console.log(newArray)

// Altere 30 dias de JavaScript para 30 dias de Python usando o método replace()
str = '30 Days Of JavaScript'
console.log(str.replace('JavaScript', 'Python'))

// Qual é o caractere no índice 15 na string '30 Days Of JavaScript'? Use o método charAt() 
console.log(str.charAt(15))

// Qual é o código de caracteres de J na string '30 Days Of JavaScript' usando charCodeAt()
console.log(str.charCodeAt(12))

// Use indexOf para determinar a posição da primeira ocorrência de a em 30 dias de JavaScript
console.log(str.indexOf('a'))

// Use lastIndexOf para determinar a posição da última ocorrência de a em 30 dias de JavaScript
console.log(str.lastIndexOf('a'))

// Use indexOf para encontrar a posição da primeira ocorrência da palavra because na seguinte frase: 'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

// Use lastIndexOf para encontrar a posição da última ocorrência da palavra because na seguinte frase: 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))

// Use a pesquisa para encontrar a posição da primeira ocorrência da palavra because na seguinte frase: 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))

// Use trim() para remover qualquer espaço em branco no início e no final de uma string. Por exemplo, ' 30 Days Of JavaScript '.
str = '  30 Days Of JavaScript  '
str = str.trim()
console.log(str)

// Use o métodostartWith() com a string 30 Days Of JavaScript e torne o resultado verdadeiro
console.log(str.startsWith('30'))

// Use o método endsWith() com a string 30 Days Of JavaScript e torne o resultado verdadeiro
console.log(str.endsWith('f JavaScript'))

// Use o método match() para encontrar todos os a em 30 dias de JavaScript
console.log(str.match(/a/gi))

// Use concat() e mescle '30 Days of' e 'JavaScript' em uma única string, '30 Days Of JavaScript'
string1 = '30 Days of'
console.log(string1.concat(' JavaScript'))

// Use o método repeat() para imprimir 30 dias de JavaScript 2 vezes
console.log(str.repeat(2))

// EX 2


// Usando console.log() imprima a seguinte instrução:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//Usando console.log() imprima a seguinte citação de Madre Teresa:
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

// Verifique se typeof '10' é exatamente igual a 10. Caso contrário, torne-o exatamente igual.
console.log(typeof '10' == typeof 10)
console.log(typeof +('10') == typeof 10)

// Verifique se parseFloat('9.8') é igual a 10, caso contrário, torne-o exatamente igual a 10.
console.log(parseFloat('9.8') == 10)
console.log(Math.ceil(parseFloat('9.8')) == 10)

// Verifique se 'on' é encontrado em python e jargão
let word = 'python' , word2 = 'jargon'
console.log(word.search('on'))
console.log(word2.search('on'))

// Espero que este curso não esteja cheio de jargões . Verifique se o jargão está na frase.
str = 'I hope this course is not full of jargon'
console.log(str.search('jargon'))

// Gere um número aleatório entre 0 e 100 inclusive.
console.log(Math.random()*101)

// Gere um número aleatório entre 50 e 100 inclusive.
console.log(Math.random()* 50 + 51)

// Gere um número aleatório entre 0 e 255 inclusive.
console.log(Math.random()* 256)

// Acesse os caracteres da string 'JavaScript' usando um número aleatório.
str = 'JavaScript'
console.log(str[Math.floor(Math.random() * str.length)])

// Use console.log() e caracteres de escape para imprimir o seguinte padrão.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

// Use substr para separar a frase because because because da seguinte frase: 'You cannot end a sentence with because because because is a conjunction'
str = 'You cannot end a sentence with because because because is a conjunction'
let firstI = str.indexOf('because')
console.log(str.substr(firstI, 7*3+2))


// EX 3


// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Conte o número de palavras love nesta frase.
str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
newArray = str.match(/love/gi)
console.log(newArray.length)

//Use match() para contar o número de todos because na seguinte frase:'You cannot end a sentence with because because because is a conjunction'
str = 'You cannot end a sentence with because because because is a conjunction'
newArray = str.match(/because/gi)
console.log(newArray.length)

// Limpe o texto a seguir e encontre a palavra mais frequente (dica, use substituição e expressões regulares).
const paragraph = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.\
 The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. \
 ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!?\
  %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let clean = paragraph.replace(/[@#$%&;]/g,'') 
console.log(clean)
console.log(clean.match(/teaching/gi)) 