const slidesArray = document.querySelectorAll('.slides');
const slidesCount = slidesArray.length;
const slideNumber = document.getElementById('current-slide-number');
let slidePosition = 0;
let currentSlide;
let followSlide;

slideNumber.innerText = slidePosition + 1 + '/' + slidesCount;

document.addEventListener("keydown",arrowsKey);

function arrowsKey(e){
  console.log(e.code);
  if( e.code == "ArrowLeft"){
    prevSlide();
  }
  if(e.code == "ArrowRight"){
    nextSlide();
  }
}


function nextSlide() {
  if (slidePosition + 1 < slidesCount) {
    currentSlide = slidesArray[slidePosition];
    followSlide = slidesArray[slidePosition + 1];
    currentSlide.style.display = 'none';
    followSlide.style.display = 'flex';
    slidePosition += 1;
    slideNumber.innerText = slidePosition + 1 + '/' + slidesCount;
  }
}

function prevSlide() {
  if (slidePosition > 0) {
    currentSlide = slidesArray[slidePosition];
    previousSlide = slidesArray[slidePosition - 1];

    currentSlide.style.display = 'none';
    previousSlide.style.display = 'flex';
    slidePosition -= 1;
    slideNumber.innerText = slidePosition + 1 + '/' + slidesCount;
  }
}

function showNav(event) {
  const nav = document.getElementById('slide-nav');
  const iconLeftArrow = document.getElementById('arrow-left-icon');
  const iconRightArrow = document.getElementById('arrow-right-icon');
  const iconHome = document.getElementById('home-icon');

  let y = event.clientY;

  if (y >= 0.8 * window.innerHeight) {
    iconLeftArrow.style.opacity = '1';
    iconRightArrow.style.opacity = '1';
    iconHome.style.opacity = '1';
    nav.style.height = '80px';
  } else {
    iconLeftArrow.style.opacity = '0';
    iconRightArrow.style.opacity = '0';
    iconHome.style.opacity = '0';
    nav.style.height = '0%';
  }
}

function showNav2(event) {
  const nav = document.getElementById('slide-nav');
  const iconHome = document.getElementById('home-icon');

  let y = event.clientY;

  if (y >= 0.8 * window.innerHeight) {
    iconHome.style.opacity = '1';
    nav.style.height = '80px';
  } else {
    iconHome.style.opacity = '0';
    nav.style.height = '0%';
  }
}
