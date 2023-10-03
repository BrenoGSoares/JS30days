let signal = 0
let btnSelect = 0

const container = document.querySelector('.countries-container')
const block = document.querySelectorAll('.country')

function count(arr) {
  for (let i = 0; i < arr.length; i++) {
    const country = arr[i]
    const block = document.createElement('div')
    const name = document.createElement('h1')
    block.className = 'country'
    block.style.cssText = `
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 15px;
      width: 200px;
      height: 200px;
    `

    name.textContent = country
    name.style.cssText = `
      position: relative;
      padding: 10px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      z-index: 2;
    `

    container.appendChild(block)
    block.appendChild(name)
  }
}

count(countries)

function inputValue() {
  const block = document.querySelectorAll('.country')
  valueInput = letter.value.toLowerCase()
  if (btnSelect == 0) {
    const itensFiltrados = countries.filter((item) =>
      item.toLowerCase().startsWith(valueInput)
    )
    block.forEach((block) => {
      block.remove()
    })
    count(itensFiltrados)
  } else {
    const itensFiltrados = countries.filter((item) =>
      item.toLowerCase().includes(valueInput)
    )
    block.forEach((block) => {
      block.remove()
    })
    count(itensFiltrados)
  }
}

const btns = document.querySelectorAll('.btn')
const initBtn = (button) => {
  button.style.cssText = `
  padding: 1rem;
  background-color: rgb(187, 119, 255);
  `
}

const finalBtn = (button) => {
  button.style.cssText = `
  background-color: rgb(153, 50, 255);
  padding: 0.7rem;
  `
}
const btnStarting = btns[0]
const btnSearch = btns[1]
const btnOrder = btns[2]

let btnAticve = false

btnStarting.addEventListener('click', () => {
  finalBtn(btnStarting)
  initBtn(btnSearch)
  initBtn(btnOrder)
  if (!btnAticve) {
    btnAticve = true
    const letter = document.getElementById('letter')
    btnSelect = 0
    letter.addEventListener('input', inputValue)
  } else {
    btnAticve = false
    initBtn(btnStarting)
    letter.removeEventListener('input', inputValue)
  }
})

btnSearch.addEventListener('click', () => {
  finalBtn(btnSearch)
  initBtn(btnStarting)
  initBtn(btnOrder)
  if (!btnAticve) {
    btnAticve = true
    const letter = document.getElementById('letter')
    btnSelect = 1
    letter.addEventListener('input', inputValue)
  } else {
    btnAticve = false
    initBtn(btnSearch)
    letter.removeEventListener('input', inputValue)
  }
})

const order = () => {
  btnAticve = false
  finalBtn(btnOrder)
  initBtn(btnSearch)
  initBtn(btnStarting)
  const block = document.querySelectorAll('.country')
  block.forEach((block) => {
    block.remove()
  })
  if (signal == 0) {
    const reversedCountries = [...countries].reverse()
    count(reversedCountries)
    signal = 1
  } else {
    count(countries)
    signal = 0
  }
}
