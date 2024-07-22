console.log('connected to html');

const btn = document.querySelector('.hamburgerMenu')
const mobileMenu = document.querySelector('.mobileSubPages')
const mobileSubPages = document.querySelectorAll('.subPage')
const currentSection = document.querySelector('.mobileSubPages')
const arrowToNextSection = document.querySelector('.arrowsToDown')
const upBtn = document.querySelector('.upArrow')

const customCursor = document.querySelector('.cursor')

const emefMail = 'contact@emef.studio'
const emailBtn = document.querySelector('.emailBtns')

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
    let home = document.querySelector('#config_first_section')
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

emailBtn.addEventListener('click', ()=>{
    var tempInput = document.createElement('input');
  // Ustaw wartość tego elementu na adres e-mail
  tempInput.value = emefMail;
  // Dodaj ten element do ciała dokumentu
  document.body.appendChild(tempInput);
  // Wybierz jego zawartość
  tempInput.select();
  // Skopiuj jego zawartość do schowka
  document.execCommand('copy');
  // Usuń tymczasowy element
  document.body.removeChild(tempInput);
  // Wyświetl alert lub inną informację


  var notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = 'Adres e-mail został skopiowany!';
  document.body.appendChild(notification);

  // Ustaw timer do usunięcia powiadomienia po 5 sekundach
  setTimeout(function() {
    document.body.removeChild(notification);
  }, 2000);
})

