const subtitle = document.querySelectorAll('.subtitle')
let opacValue = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8]
let opacIndex = 0

const animationSubtitle = () => {
  subtitle[0].style.cssText = `
  transition: opacity 1s ease;
  opacity: ${opacValue[opacIndex]};`
  opacIndex = (opacIndex + 1) % opacValue.length
  if (opacIndex === 0) {
    opacValue.reverse()
  }
}

setInterval(animationSubtitle, 200)

const shineSubtitle = () => {
  subtitle[1].style.cssText = `
  transition: opacity 1s ease;
  text-shadow: 0px 0px ${opacValue[1] * 45}px #fff;`
}

shineSubtitle()
