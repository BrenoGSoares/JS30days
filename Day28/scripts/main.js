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

const buttonTexts = ['xx', '+5', '-5']
let idBtn = 0

const playerTable = document.querySelector('.flex-leader')
const playerData = document.querySelectorAll('.text-input')

function createButton(idBtn, i) {
  const btnFunc = document.createElement('button')
  btnFunc.textContent = buttonTexts[i]
  btnFunc.className = 'btnFunc'
  const btnId = `${idBtn}${i}`
  btnFunc.setAttribute('data-id', btnId)
  btnFunc.addEventListener('click', () => getValue(btnId))
  return btnFunc
}

function formatTime() {
  const now = new Date()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const hours = now.getHours().toString().padStart(2, '0')
  return `${
    meses[now.getMonth()]
  } ${now.getDate()}, ${now.getFullYear()}, ${hours}:${minutes}`
}

function createPlayerBlock(idBtn) {
  const block = document.createElement('div')
  block.className = 'player'
  block.id = `b${idBtn}`

  for (let i = 0; i < playerData.length; i++) {
    const data = document.createElement('h2')
    data.className = 'data'

    if (i === 0) {
      const timeSpan = document.createElement('span')
      timeSpan.id = 'time'
      timeSpan.textContent = formatTime()

      data.textContent = `${playerData[i].value} ${playerData[i + 1].value} `
      data.appendChild(document.createElement('br'))
      data.appendChild(timeSpan)
      i++
    } else if (i === 3) {
      data.textContent = parseInt(playerData[i].value)
    } else {
      data.textContent = playerData[i].value
    }

    block.appendChild(data)
  }

  for (let i = 0; i < buttonTexts.length; i++) {
    block.appendChild(createButton(idBtn, i))
  }

  return block
}

function getValue(btnId) {
  const players = document.querySelectorAll('.player')
  const lastChar = btnId.charAt(btnId.length - 1)

  if (lastChar === '0') {
    const playerId = `b${btnId.slice(0, -1)}`
    const playerToRemove = document.querySelector(`#${playerId}`)
    playerToRemove.remove()
    idBtn--
  } else if (lastChar === '1') {
    console.log('Button 2 clicked')
    console.log(`Button ID: ${btnId}`)
  } else {
    console.log(`Button ID: ${btnId}`)
  }
}

function addPlayer() {
  const newPlayerBlock = createPlayerBlock(idBtn)
  playerTable.appendChild(newPlayerBlock)
  idBtn++
}
