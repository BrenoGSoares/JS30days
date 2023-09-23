const container = document.querySelector('.container')
console.log(container)

function primeNumber(num) {
  if (num == 0 || num == 1) {
    return false
  }
  for (var divisor = 2; divisor < num; divisor++)
    if (num % divisor == 0) return false
  return true
}

for (let i = 0; i < 102; i++) {
  const number = document.createElement('h1')
  number.className = 'Num'
  number.textContent = i
  number.style.cssText = `
    display: inline-block;
    margin: 5px;
    padding: 10px;
    font-size: 24px;
    min-width: 40px;
    text-align: center;
  `

  if (primeNumber(i)) {
    number.style.backgroundColor = 'red' // Cor de fundo dos números primos
  } else if (i % 2 === 0) {
    number.style.backgroundColor = 'green' // Cor de fundo dos números pares
  } else {
    number.style.backgroundColor = 'Yellow'
  }

  if (i % 6 === 0) {
    const lineBreak = document.createElement('br') // Crie uma quebra de linha após cada sexto número
    container.appendChild(lineBreak) // Adicione a quebra de linha ao contêiner
  }

  container.appendChild(number) // Adicione o número ao contêiner
}
