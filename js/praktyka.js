let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}
function currentSlider(n) {
  showSlides((slideIndex = n))
}
function showSlides(n) {
  const dots = document.querySelectorAll('.dot')
  const slides = document.querySelectorAll('.slidy')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active')
  }
  dots[slideIndex - 1].classList.add('active')
  slides[slideIndex - 1].style.display = 'block'
}
