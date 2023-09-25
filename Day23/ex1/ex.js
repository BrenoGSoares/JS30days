const container = document.querySelector('.wrapper')
const numberGenerator = document.querySelector('#num')

function primeNumber(num) {
  if (num == 0 || num == 1) {
    return false
  }
  for (var divisor = 2; divisor < num; divisor++)
    if (num % divisor == 0) return false
  return true
}

function generator() {
  const lineBreaks = document.querySelectorAll('br')
  const boxs = document.querySelectorAll('.Num')

  lineBreaks.forEach((line) => {
    line.remove()
  })

  boxs.forEach((box) => {
    box.remove()
  })

  const valor = parseInt(numberGenerator.value)

  for (let i = 0; i < valor; i++) {
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
      const lineBreak = document.createElement('br')
      container.appendChild(lineBreak) // Adicione a quebra de linha ao contêiner
    }

    container.appendChild(number) // Adicione o número ao contêiner
  }
}
