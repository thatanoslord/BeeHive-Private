import ScrollReveal from "scrollreveal";

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('navlist-open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('navlist-open');
};

const sr = scrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text', { delay: 300 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.container', { delay: 400 });

sr.reveal('.about-img', {});
sr.reveal('.about-text', { delay: 300 });


sr.reveal('.middle-text', {});
sr.reveal('.row-btn,.shop-content', { delay: 300 });

sr.reveal('.review-content,.contact', { delay: 300 });






//scrollReveal

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container
ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content h4, .header_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1500,
});

// About container
ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// Pricing section
ScrollReveal().reveal(".price_card", {
  ...scrollRevealOption,
  interval: 500,
});