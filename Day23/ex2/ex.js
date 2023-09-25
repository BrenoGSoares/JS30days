const container = document.querySelector('.countries-container')

for (let i = 0; i < countries.length; i++) {
  const country = countries[i]
  const name = document.createElement('h1')
  name.textContent = country
  name.style.cssText = `
    display: inline-block;
    margin: 5px;
    padding: 10px;
    width: 150px;
    height: 50px;
    font-size: 20px;
    font-weight: 100;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.125); 
    border-radius: 3px;
    text-align: center; 
    overflow: hidden;`

  container.appendChild(name)

  // Quebra de linha após cada grupo de 6 países
  if ((i + 1) % 6 === 0) {
    const lineBreak = document.createElement('br')
    container.appendChild(lineBreak)
  }
}
