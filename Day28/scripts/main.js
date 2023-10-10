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

function getScoreFromId(id) {
  const scoreElement = document.querySelector(`#${id} .data:nth-child(3)`)
  return parseInt(scoreElement.textContent)
}

function compareScores(a, b) {
  const scoreA = getScoreFromId(a.id)
  const scoreB = getScoreFromId(b.id)
  return scoreB - scoreA
}

function orderplayer() {
  const players = document.querySelectorAll('.player')
  const sortedPlayerDivs = Array.from(players).sort(compareScores)
  players.forEach((div) => div.remove())
  sortedPlayerDivs.forEach((div) => playerTable.appendChild(div))
}

function formatTime() {
  const now = new Date()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const hours = now.getHours().toString().padStart(2, '0')
  return `${
    meses[now.getMonth()]
  } ${now.getDate()}, ${now.getFullYear()} ${hours}:${minutes}`
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
  const lastChar = btnId.charAt(btnId.length - 1)
  const playerId = `b${btnId.slice(0, -1)}`
  const player = document.querySelector(`#${playerId}`)
  const scorePlayerSelect = document.querySelectorAll(`#${playerId} .data`)
  if (lastChar === '0') {
    player.remove()
    idBtn--
  } else if (lastChar === '1') {
    scorePlayerSelect[2].textContent =
      parseInt(scorePlayerSelect[2].textContent) + 5
  } else {
    const scorePlayerSelect = document.querySelectorAll(`#${playerId} .data`)
    scorePlayerSelect[2].textContent =
      parseInt(scorePlayerSelect[2].textContent) - 5
  }
  orderplayer()
}

function addPlayer() {
  const newPlayerBlock = createPlayerBlock(idBtn)
  playerTable.appendChild(newPlayerBlock)
  orderplayer()
  idBtn++
}
