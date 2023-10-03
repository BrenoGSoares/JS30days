const container = document.querySelector('.countries-container')

for (let i = 0; i < countries.length; i++) {
  const country = countries[i]
  const block = document.createElement('div')
  const name = document.createElement('h1')
  block.className = 'country'
  block.style.cssText = `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
  width: 200px;
  height: 200px;`

  name.textContent = country
  name.style.cssText = `
  position: relative;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  z-index:2`

  container.appendChild(block)
  block.appendChild(name)
}
