const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

downBtn.addEventListener('click', () => {
  if (activeSlideIndex >= slidesLength - 1) {
    activeSlideIndex = 0
    update()
  } else {
    activeSlideIndex++
    update()
  }
})

upBtn.addEventListener('click', () => {

  if (activeSlideIndex <= 0) {
    console.log('test')
    activeSlideIndex = slidesLength - 1
    update()
  } else {

    activeSlideIndex--
    update()
  }
})

function update() {
  slideLeft.style.transform = `translateY(${sliderContainer.clientHeight * activeSlideIndex}px)`
  slideRight.style.transform = `translateY(-${sliderContainer.clientHeight * activeSlideIndex}px)`
}