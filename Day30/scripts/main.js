let signal = 0
let btnSelect = 0

const container = document.querySelector('.countries-container')
const block = document.querySelectorAll('.country')

function count(arr) {
  for (let i = 0; i < arr.length; i++) {
    const country = [
      arr[i].name,
      arr[i].capital,
      arr[i].languages,
      arr[i].population,
      arr[i].flag,
    ]
    const block = document.createElement('div')
    const flag = document.createElement('img')
    const name = document.createElement('h1')
    const info1 = document.createElement('h3')
    const info2 = document.createElement('h3')
    const info3 = document.createElement('h3')
    block.className = 'country'
    block.style.cssText = `
      display: flex;
      flex-direction: column;
      margin: 10px 15px;
      width: 200px;
      height: 300px;
    `
    flag.src = country[country.length - 1]
    flag.style.cssText = `
    margin: 0 auto;
    padding: 10px 0;
    width: 150px;
    height: 100px;
    `
    name.textContent = country[0]
    name.style.cssText = `
      padding: 10px;
      color: #ff9650;
      font-size: 20px;
      font-weight: 600;
    `

    container.appendChild(block)
    block.appendChild(flag)
    block.appendChild(name)
    info1.textContent = `Capital: ${country[1]}`
    info1.id = 'capital'
    block.appendChild(info1)

    info2.textContent = `Langagues: ${country[2].join(', ')}`
    block.appendChild(info2)

    info3.textContent = `Population: ${country[3]}`
    info3.id = 'pop'
    block.appendChild(info3)
  }
}

count(countries)

function inputValue() {
  const block = document.querySelectorAll('.country')
  valueInput = letter.value.toLowerCase()
  const itensFiltrados = countries.filter((item) =>
    item.name.toLowerCase().startsWith(valueInput)
  )
  block.forEach((block) => {
    block.remove()
  })
  count(itensFiltrados)
}

const btns = document.querySelectorAll('.btn')

const initBtn = (button) => {
  button.style.cssText = `
  background-color:  #fd893c5;
  `
}

const finalBtn = (button) => {
  button.style.cssText = `
  background-color:  red;
  `
}

const btnName = btns[0]
const btnCapital = btns[1]
const btnPop = btns[2]

let btnAticve = false
const letter = document.getElementById('letter')
letter.addEventListener('input', inputValue)

btnName.addEventListener('click', () => {
  orderCountries = []
  const listContries = document.querySelectorAll('.country h1')
  listContries.forEach((country) => {
    orderCountries.push(country.textContent)
  })
  finalBtn(btnName)
  initBtn(btnCapital)
  initBtn(btnPop)
  orderName(orderCountries)
  if (!btnAticve) {
    btnAticve = true
    btnSelect = 0
  } else {
    btnAticve = false
    initBtn(btnName)
  }
})

btnCapital.addEventListener('click', () => {
  orderCountries = []
  const listContries = document.querySelectorAll('#capital')
  listContries.forEach((country) => {
    const text = country.textContent
    const capitalIndex = text.indexOf('Capital: ')

    if (capitalIndex !== -1) {
      const capital = text.slice(capitalIndex + 'Capital: '.length)
      orderCountries.push(capital)
    }
  })
  finalBtn(btnCapital)
  initBtn(btnName)
  initBtn(btnPop)
  orderCapital(orderCountries)
  if (!btnAticve) {
    btnAticve = true
    btnSelect = 1
  } else {
    btnAticve = false
    initBtn(btnCapital)
  }
})

btnPop.addEventListener('click', () => {
  orderCountries = []
  const listContries = document.querySelectorAll('#pop')
  listContries.forEach((country) => {
    const text = country.textContent
    const populationIndex = text.indexOf('Population: ')

    if (populationIndex !== -1) {
      const population = text.slice(populationIndex + 'Population: '.length)
      orderCountries.push(parseFloat(population))
    }
  })
  finalBtn(btnPop)
  initBtn(btnName)
  initBtn(btnCapital)
  orderPopulation(orderCountries)
  if (!btnAticve) {
    btnAticve = true
    btnSelect = 1
  } else {
    btnAticve = false
    initBtn(btnPop)
  }
})

const orderName = (arr) => {
  const block = document.querySelectorAll('.country')
  const objetosFiltrados = countries.filter((objeto) =>
    arr.includes(objeto.name)
  )
  block.forEach((block) => {
    block.remove()
  })

  if (signal == 0) {
    const reversedCountries = [...objetosFiltrados].reverse()
    count(reversedCountries)
    signal = 1
  } else {
    count(objetosFiltrados)
    signal = 0
  }
}

const orderCapital = (arr) => {
  const block = document.querySelectorAll('.country')

  const objetosFiltrados = countries.filter((objeto) =>
    arr.includes(objeto.capital)
  )
  objetosFiltrados.sort((a, b) => a.capital.localeCompare(b.capital))

  block.forEach((block) => {
    block.remove()
  })

  if (signal === 0) {
    const reversedCountries = objetosFiltrados.slice().reverse()
    count(reversedCountries)
    signal = 1
  } else {
    count(objetosFiltrados)
    signal = 0
  }
}

const orderPopulation = (arr) => {
  const block = document.querySelectorAll('.country')

  const objetosFiltrados = countries.filter((objeto) =>
    arr.includes(objeto.population)
  )
  console.log(objetosFiltrados)
  objetosFiltrados.sort((a, b) => a.population - b.population)

  block.forEach((block) => {
    block.remove()
  })

  if (signal === 0) {
    const reversedCountries = objetosFiltrados.slice().reverse()
    count(reversedCountries)
    signal = 1
  } else {
    count(objetosFiltrados)
    signal = 0
  }
}
