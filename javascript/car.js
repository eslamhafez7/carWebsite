const navMenu = document.getElementById('nav_menu'),
navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close')

// Show Menu 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide Menu 
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Popular Swiper 
let swiperPopular = new Swiper(".popular-container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        }, 
        768: {
            slidesPerView: 3,
        }, 
        1024: {
            spaceBetween: 48,
        }
    }
});

// MIXITUP Filter Featured
var mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 300
    }
});
// Link Active Featured 
const linkFeatured = document.querySelectorAll('.featured-item') 
function activeFeatured () {
    linkFeatured.forEach(z=> z.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(z=> z.addEventListener('click', activeFeatured))

// Show Scroll Up 
function scrollUp () {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport innerHeight,  add the show-scrollup class to the a tag with the scrollup class
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scrollup');
    } else {
      scrollUp.classList.remove('show-scrollup');
    }
  }
  
  window.addEventListener('scroll', scrollUp);

  // Scroll Sections Active Link 
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Scroll reveal animation 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
    reset: true
})
sr.reveal('.home-title, .popular-container, .features-img, .featured-filters')
sr.reveal('.home-subtitle', {delay: 500})
sr.reveal('.home-elec', {delay: 600})
sr.reveal('.home-img', {delay: 800})
sr.reveal('.home-car-data', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.home-button', {delay: 1000, interval: 100, origin: 'bottom'})
sr.reveal('.about-group, .offer-data', {origin: 'left'})
sr.reveal('.about-data, .offer-img', {origin: 'right'})
sr.reveal('.features-map', {delay: 600, origin: 'bottom'})
sr.reveal('.features-card', {interval: 300})
sr.reveal('.featured-card, .logos-content, .footer-container', {interval: 100})



  
