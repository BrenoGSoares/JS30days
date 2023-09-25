const text = document.getElementById('text')
text.style.cssText = `
  display: inline-block; /*  torna o elemento de bloco com largura automática */
  text-align: center;
  min-width: 200px;
  margin: 50px 0;
  padding: 15px;
  font-size: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.125); 
  border-radius: 3px;`

document.body.addEventListener('keypress', (e) => {
  const code = document.getElementById('code')
  const num = document.createElement('h2')
  const key = document.createElement('h2')

  num.style.cssText = `
    display: inline-block;
    text-align: center;
    min-width: 200px;
    padding: 15px;
    font-size: 6rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.125);
    border-radius: 3px;
    color: green; 
    `
  key.style.cssText = `
  color:green;`
  const verNum = document.querySelectorAll('h2')
  verNum.forEach((e) => {
    e.remove()
  })

  num.textContent = e.keyCode
  key.textContent = e.key
  code.appendChild(num)
  text.appendChild(key)
})
