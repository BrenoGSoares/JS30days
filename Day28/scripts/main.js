const meses = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

const playerTable = document.querySelector('.flex-leader')
const playerData = document.querySelectorAll('.text-input')

function add() {
  const newValue = parseInt(playerData[3].value) + 5
  // Faça algo com o novo valor, por exemplo, atualize um elemento na página
  console.log(`Novo valor após adicionar 5: ${newValue}`)
}

function sub() {
  const newValue = parseInt(playerData[3].value) - 5
  console.log(`Novo valor após subtrair 5: ${newValue}`)
}

function rem() {
  const newValue = parseInt(playerData[3].value) - 0
  console.log(`Novo valor após subtrair 5: ${newValue}`)
}

const addPlayer = () => {
  const block = document.createElement('div')
  const lineBreak = document.createElement('br')
  block.className = 'player'
  for (let i = 0; i < playerData.length; i++) {
    const data = document.createElement('h2')
    data.className = 'data'

    if (i === 0) {
      const now = new Date()
      const timeSpan = document.createElement('span')

      timeSpan.textContent = `${
        meses[now.getMonth()]
      } ${now.getDay()}, ${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`

      data.appendChild(
        document.createTextNode(
          playerData[i].value + ' ' + playerData[i + 1].value
        )
      )
      timeSpan.id = 'time'
      data.appendChild(document.createTextNode(' '))
      data.appendChild(lineBreak)
      data.appendChild(timeSpan) // Anexe o tempo como um <span>

      data.id = 'firstValue'
      i += 1
    } else if (i === 3) {
      data.textContent = parseInt(playerData[i].value)
    } else {
      data.textContent = playerData[i].value
    }

    block.appendChild(data)
  }

  const buttonTexts = ['xx', '+5', '-5']
  const buttonFuncs = [rem, add, sub]
  const blockBtn = document.createElement('div')

  for (let i = 0; i < buttonTexts.length; i++) {
    const btnFunc = document.createElement('button')
    btnFunc.textContent = buttonTexts[i]
    btnFunc.className = 'btnFunc'
    btnFunc.onclick = buttonFuncs[i]
    blockBtn.appendChild(btnFunc)
    block.appendChild(blockBtn)
  }
  playerTable.appendChild(block)
}
