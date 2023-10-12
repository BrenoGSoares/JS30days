const divColor = document.querySelector('.container')
const textSlogan = document.getElementById('slogan')
const textFonts = [
  { name: 'Aldrich', fontSize: [100] },
  { name: 'Lato', fontSize: [120, 140, 170] },
  { name: 'Montserrat', fontSize: [120, 140, 170] },
  { name: 'Nunito', fontSize: [130, 160, 175] },
  { name: 'Oswald', fontSize: [150] },
  { name: 'Raleway', fontSize: [120, 150] },
  { name: 'Roboto', fontSize: [140, 160, 175] },
]
const weightFont = [200, 400, 600, 800]

function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

function defineTextFont(fonts) {
  const definedFont = randomNumber(fonts.length)
  const nameTextFont = fonts[definedFont].name
  const lengthFontsSize = fonts[definedFont].fontSize.length
  const sizetextFont =
    fonts[definedFont].fontSize[randomNumber(lengthFontsSize)]
  return [nameTextFont, sizetextFont]
}

function defineColor() {
  return Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, '0')
}

function changeStyle() {
  divColor.style.cssText = `
  background-color: #${defineColor()};
  `
  const originalText = textSlogan.textContent
  let newText = ''

  for (let i = 0; i < originalText.length; i++) {
    const color = defineColor()
    const modifiedCaracter = `<span style="color: #${color}; animation: fadeIn ${randomNumber(
      5
    )}s; ">${originalText[i]}</span>`
    newText += modifiedCaracter
  }
  textSlogan.innerHTML = newText

  const fontStyle = defineTextFont(textFonts)
  textSlogan.style.cssText = `
  font-family: '${fontStyle[0]}';
  font-size: ${fontStyle[1]}px;
  font-weight: ${weightFont[randomNumber(weightFont.length)]};
  `
}

setInterval(changeStyle, 2000)
