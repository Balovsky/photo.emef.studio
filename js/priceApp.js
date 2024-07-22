console.log('connected to html');

const btn = document.querySelector('.hamburgerMenu')
const mobileMenu = document.querySelector('.mobileSubPages')
const mobileSubPages = document.querySelectorAll('.subPage')
const currentSection = document.querySelector('.mobileSubPages')
const arrowToNextSection = document.querySelector('.arrowsToDown')
const upBtn = document.querySelector('.upArrow')

const customCursor = document.querySelector('.cursor')

const subPages = document.querySelectorAll('.subPage')
const homeLogo = document.querySelector('#logoLogo')
const hometext = document.querySelector('#logoName')

const firstTitle = document.querySelector('.firstTitle')
const firstSectionDesc = document.querySelector('.firstSectionDesc')
const arrowsToDown = document.querySelector('.arrowsToDown')

window.addEventListener('DOMContentLoaded', ()=>{
    if (window.location.hash) {
        var targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    btn.classList.remove('toggleMenu')
    mobileMenu.classList.remove('openMenu')
    // mobileMenu.style.display = 'block';
})


console.log(window);
window.addEventListener('scroll', ()=>{
    let heightPosition = scrollY 
    if (heightPosition>0){
        upBtn.classList.add('activeUp')
    }else{
        upBtn.classList.remove('activeUp')
    }
    // console.log(heightPosition);
})

window.addEventListener('mousemove', (e)=>{
    let x = e.clientX
    let y = e.clientY
    customCursor.style.top = y + 'px'
    customCursor.style.left = x + 'px'
})

btn.addEventListener('click', () =>{
    btn.classList.toggle('toggleMenu')
    mobileMenu.classList.toggle('openMenu')
    
});

mobileSubPages.forEach(subPage => {
    subPage.addEventListener('click', () =>{
        mobileMenu.classList.remove('openMenu')
        // mobileMenu.style.display = 'none';
        btn.classList.remove('toggleMenu')
    })
})



upBtn.addEventListener('click', ()=>{
    let home = document.querySelector('#section_first')
    home.scrollIntoView({behavior: 'smooth'})
})


subPages.forEach(subPage => {
    subPage.addEventListener('mouseenter', () =>{
        customCursor.style.transform = `scale(6)`
    })
    subPage.addEventListener('mouseleave', () =>{
        customCursor.style.transform = `scale(1)`
    })
})

homeLogo.addEventListener('mouseenter', () =>{
    customCursor.style.transform = `scale(6)`
})
homeLogo.addEventListener('mouseleave', () =>{
customCursor.style.transform = `scale(1)`
})

hometext.addEventListener('mouseenter', () =>{
    customCursor.style.transform = `scale(6)`
    customCursor.style.mixBlendMode = 'difference';
    customCursor.style.backgroundColor = '#EDBA58';
})
hometext.addEventListener('mouseleave', () =>{
customCursor.style.transform = `scale(1)`
customCursor.style.mixBlendMode = 'difference';
        customCursor.style.backgroundColor = 'white';
})



