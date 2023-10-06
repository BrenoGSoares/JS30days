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

const addPlayer = () => {
  const playerData = document.querySelectorAll('.text-input')
  const block = document.createElement('div')
  block.className = 'player'
  for (let i = 0; i < playerData.length; i++) {
    const data = document.createElement('h2')
    const time = document.createElement('h3')
    data.className = 'data'

    if (i === 0) {
      const now = new Date()
      time.textContent = `${
        meses[now.getMonth()]
      }, ${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`
      data.textContent = `${playerData[i].value} ${time.textContent}`
      data.id = 'firstValue'
    } else if (i === 3) {
      data.textContent = parseInt(playerData[i].value)
    } else {
      data.textContent = playerData[i].value
    }
    block.appendChild(data)
  }

  const buttonTexts = ['xx', '+5', '-5']
  const blockBtn = document.createElement('div')

  for (let i = 0; i < buttonTexts.length; i++) {
    const btnFunc = document.createElement('button')
    btnFunc.textContent = buttonTexts[i]
    btnFunc.className = 'btnFunc'
    blockBtn.appendChild(btnFunc)
    block.appendChild(blockBtn)
  }
  playerTable.appendChild(block)
}
