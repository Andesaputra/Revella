//scroll nav
let trigger = "backnav";
let scrollTrigger = 60;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].classList.add(trigger);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(trigger);
  }
};

// Carousel BestSeller
const gap = 30;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("nav-next"),
  prev = document.getElementById("nav-prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "flex";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

const content_img = document.querySelectorAll(".content-img");
window.addEventListener('scroll', fadeIn);

function fadeIn(){
  content_img.forEach((content_img) => {
    let distanceInView = content_img.getBoundingClientRect().top - window.innerHeight + 20;

      if(distanceInView < 0){
        content_img.classList.add('scrolldown');
      } else {
        content_img.classList.remove('scrolldown');
      }
  });
}
fadeIn();
