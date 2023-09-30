function mostPopulousCountries(arr, num) {
  const sortedCountries = arr
    .slice()
    .sort((a, b) => b.population - a.population)
  const totalPopulation = sortedCountries.reduce(
    (acc, country) => acc + country.population,
    0
  )
  sortedCountries.unshift({ name: 'World', population: totalPopulation })
  return sortedCountries.slice(0, num)
}

let lang = []

for (const objeto of countries_data) {
  if (objeto.languages) {
    if (Array.isArray(objeto.languages)) {
      lang.push(...objeto.languages)
    } else {
      lang.push(objeto.languages)
    }
  }
}

function mostSpokenLanguages(arr, num) {
  const languageCounts = {}
  for (const language of arr) {
    if (languageCounts[language]) {
      languageCounts[language] += 1
    } else {
      languageCounts[language] = 1
    }
  }
  const sortedLang = Object.fromEntries(
    Object.entries(languageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, num)
  )
  return sortedLang
}

const graphTitle = document.querySelector('.graph-title')
const graphs = document.querySelector('.graphs')
const graphName = document.querySelector('#stat')
const show_pop = () => {
  graphTitle.textContent = '10 Most populated countries in the world'
  const boxs = document.querySelectorAll('.country')
  boxs.forEach((box) => {
    box.remove()
  })

  const countries = mostPopulousCountries(countries_data, 10)
  const countryElements = countries.map((country) => {
    const block = document.createElement('div')
    const nameCountry = document.createElement('h4')
    const popCountry = document.createElement('h4')
    nameCountry.textContent = country.name
    popCountry.textContent = country.population.toLocaleString()
    block.className = 'country'
    block.appendChild(nameCountry)
    block.appendChild(popCountry)
    return block
  })

  graphs.append(...countryElements)
}

const show_lang = () => {
  graphTitle.textContent = '10 Most Spoken languages in the world'
  const boxs = document.querySelectorAll('.country')
  boxs.forEach((box) => {
    box.remove()
  })

  const languagesData = mostSpokenLanguages(lang, 10)
  console.log(languagesData)

  for (const country in languagesData) {
    const block = document.createElement('div')
    const nameCountry = document.createElement('h4')
    const langCountry = document.createElement('h4')
    const keyValue = languagesData[country]

    nameCountry.textContent = country
    langCountry.textContent = keyValue
    block.className = 'country'

    block.appendChild(nameCountry)
    block.appendChild(langCountry)

    graphs.append(block)
  }
}
