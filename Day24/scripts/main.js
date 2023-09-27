const mass = document.getElementById('mass')
const planet = document.getElementById('option')
const nomePlanet = [
  'Mercury',
  'Venus',
  'Earth',
  'Moon',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
  'Pluto',
]
const g = [3.7, 8.87, 9.8, 1.6, 3.71, 24.79, 10.44, 8.87, 11.15, 0.62]
const result = () => {
  const descr = document.getElementsByClassName('description')
  descr[0].style.cssText = `display: flex;`
  const spanName = document.getElementById('name')
  const resultPeso = document.getElementById('result')
  const imagem = document.getElementsByClassName('planet-image')
  console.log(imagem)
  const peso = parseFloat(mass.value) * g[parseInt(planet.value)]
  spanName.textContent = nomePlanet[parseInt(planet.value)].toUpperCase()
  resultPeso.textContent = peso.toFixed(2)
  imagem[0].src =
    './images/' + nomePlanet[parseInt(planet.value)].toLowerCase() + '.png'
  console.log(imagem.src)
}
