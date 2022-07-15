// scroll nav 

const headerNav = document.querySelector('.header-nav');
const btnScrollTop = document.querySelector('.scroll-top-btn')
const headerNavHeight = headerNav.offsetHeight;

// console.log(headerNavHeight);
window.addEventListener('scroll', () => {
    const navScroll = window.pageYOffset;
    if(navScroll > (headerNavHeight * 0.8)) {
        headerNav.classList.add('nav-bg-dark')
        btnScrollTop.style.display = 'block';
    } else {
        headerNav.classList.remove('nav-bg-dark')
        btnScrollTop.style.display = 'none';
    }
})


//onscroll
const header = document.querySelector('.header');
btnScrollTop.addEventListener('click', () => {
    header.scrollIntoView({behavior:"smooth", block:"start"});
    // console.log('hi');
})

document.querySelectorAll('.home-scroll').forEach(scrollBtn => {
    scrollBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        document.querySelector('.header').scrollIntoView({behavior:"smooth", block:"start"});
        removeMenu();
    })
})

document.querySelectorAll('.review-scroll').forEach(scrollBtn => {
    scrollBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        document.querySelector('.reviews').scrollIntoView({behavior:"smooth", block:"start"});
        removeMenu();
    })
})

document.querySelectorAll('.category-scroll').forEach(scrollBtn => {
    scrollBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        document.querySelector('.category').scrollIntoView({behavior:"smooth", block:"start"});
        removeMenu();
    })
})

document.querySelectorAll('.property-scroll').forEach(scrollBtn => {
    scrollBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        document.querySelector('.properties').scrollIntoView({behavior:"smooth", block:"start"});
        removeMenu();
    })
})

// menu mobile 
const openMenu = document.querySelector('.nav-icon');
const closeMenu = document.querySelector('.menu-mobile-close button');
const menuMobile = document.querySelector('.menu-mobile');
const addMenu = () => {
    menuMobile.classList.add('open-menu-mobile');
}
const removeMenu = () => {
    menuMobile.classList.remove('open-menu-mobile');
}
openMenu.addEventListener('click', ()=> {
    addMenu();
}) 
closeMenu.addEventListener('click', ()=> {
    removeMenu();
})


// slide animation
// const slides = document.querySelectorAll('.review-item');
// slides.forEach((slide, index) => {
//     console.log(slide);
// })