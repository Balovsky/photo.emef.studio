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
    renderImageGallery()
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
    let home = document.querySelector('.navBar')
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




const imagesGalleryObj = [
    {
        path: '../../assets/gallery/1.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../../assets/gallery/2.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../../assets/gallery/3.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/4.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../../assets/gallery/5.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/6.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../../assets/gallery/7.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/8.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/9.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../../assets/gallery/10.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/11.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/12.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/13.jpg',
        typ: 'packshot',
        name: 'but',
    },
    {
        path: '../../assets/gallery/14.jpg',
        typ: 'creative',
        name: 'but',
    },
    {
        path: '../../assets/gallery/15.jpg',
        typ: 'creative',
        name: 'aranżacyjne',
    },
    {
        path: '../../assets/gallery/16.jpg',
        typ: 'packshot',
        name: 'video',
    },
    {
        path: '../../assets/gallery/17.jpg',
        typ: 'packshot',
        name: '360',
    },
    {
        path: '../../assets/gallery/video1.mp4',
        typ: 'video',
        name: '360',
    },
    {
        path: '../../assets/gallery/video2.mp4',
        typ: 'video',
        name: '360',
    },
    {
        path: '../../assets/gallery/video3.mp4',
        typ: 'video',
        name: '360',
    },
    {
        path: '../../assets/gallery/video4.mp4',
        typ: 'video',
        name: '360',
    },
    {
        path: '../../assets/gallery/video5.mp4',
        typ: 'video',
        name: '360',
    },
    {
        path: '../../assets/gallery/video6.mp4',
        typ: 'video',
        name: '360',
    },
    {
        path: '../../assets/gallery/video7.mp4',
        typ: 'video',
        name: '360',
    },
    {
        path: '../../assets/gallery/video8.mp4',
        typ: 'video',
        name: '360',
    },
    
    {
        path: '../../assets/gallery/gil9.gif',
        typ: '360',
        name: '360',
    },
    {
        path: '../../assets/gallery/gil8.gif',
        typ: '360',
        name: '360',
    },
    {
        path: '../../assets/gallery/gil7.gif',
        typ: '360',
        name: '360',
    },
    {
        path: '../../assets/gifs/72 3s.gif',
        typ: '360',
        name: '360',
    }
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

const GalleryContainer = document.querySelector('.masonry-container')



// const filtersBtns = document.querySelector('.btn')


function renderImageGallery(){
    shuffleArray(imagesGalleryObj)
    for (let i = 0; i < imagesGalleryObj.length; i++){
        
        if(imagesGalleryObj[i].typ ==='video'){
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let film = document.createElement('video')
            film.src = imagesGalleryObj[i].path
            film.autoplay = true;
            film.type = 'video/mp4'
        imagContainer.appendChild(film)
        }else{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let img = document.createElement('img')
            img.src = imagesGalleryObj[i].path
            img.alt = imagesGalleryObj[i].name
            imagContainer.appendChild(img)
        }
    }
    CreateGallery()
}

const filtersBtnss = document.querySelectorAll('.btn')
filtersBtnss.forEach((filterBtn, index) =>{
    filterBtn.addEventListener('click', ()=>{
        // filterBtn.classList.remove('filterActive')
        let divsToRemove = document.querySelectorAll('.masonry-item')
        divsToRemove.forEach(divToRemove =>{
        divToRemove.remove()
        // console.log(filterBtn);
        filterBtn.classList.add('fadeInOut')

        setTimeout(function() {
            filterBtn.classList.remove('fadeInOut') // Usuń klasę po 2 sekundach
        }, 3000);
    })
switch (index) {
    case 0:
        renderImageGallery()

        break;
    case 1:
        const PackshotImages = imagesGalleryObj.filter(image => image.typ === 'packshot');
        PackshotImages.forEach(imageForGallerry =>{
        let imagContainer = document.createElement('div')
        imagContainer.classList.add('masonry-item')
        GalleryContainer.appendChild(imagContainer)
        let image = document.createElement('img')
        image.src = imageForGallerry.path
        image.alt = imageForGallerry.name
        imagContainer.style.display = 'block'
        imagContainer.appendChild(image)
        
    })
    CreateGallery()
        break;
    case 2:
            const VideoImages = imagesGalleryObj.filter(image => image.typ === 'video');
            VideoImages.forEach(imageForGallerry =>{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let image = document.createElement('video')
            image.src = imageForGallerry.path
            image.type = 'video/mp4'
            image.autoplay = true;
            imagContainer.style.display = 'block'
        imagContainer.appendChild(image)
    })
    CreateGallery()
        break;
        case 3:
            const Images = imagesGalleryObj.filter(image => image.typ === '360');
            Images.forEach(imageForGallerry =>{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let image = document.createElement('img')
            image.src = imageForGallerry.path
            image.alt = imageForGallerry.name
            imagContainer.style.display = 'block'
        imagContainer.appendChild(image)
    })
    CreateGallery()
        break;
        case 4:
            const CreativeImages = imagesGalleryObj.filter(image => image.typ === 'creative');
            CreativeImages.forEach(imageForGallerry =>{
            let imagContainer = document.createElement('div')
            imagContainer.classList.add('masonry-item')
            GalleryContainer.appendChild(imagContainer)
            let image = document.createElement('img')
            image.src = imageForGallerry.path
            image.alt = imageForGallerry.name
            imagContainer.style.display = 'block'
            imagContainer.appendChild(image)
    })
    CreateGallery()
        break;

}
    })
})


// console.log(imagesGalleryObj);
// const testBtn = document.querySelector('.testoo')
// testBtn.addEventListener('click', ()=>{
//     let allimages = document.querySelectorAll('.masonry-item')
//     console.log(allimages);
// })

// window.addEventListener('change', ()=>{
//     let allimages = document.querySelectorAll('.masonry-item')
//     console.log(allimages);
// })

function CreateGallery(){
    let currentItemsImg = document.querySelectorAll('.masonry-item img')
    let currentItemsVideo = document.querySelectorAll('.masonry-item video')
    currentItemsImg.forEach(currentItem =>{
        currentItem.addEventListener('click', ()=>{
            let container = document.createElement('div')
            container.classList.add('fullScreenGallery')
            let currentImagePath = currentItem.src
            let currentImg = document.createElement('img')
            currentImg.src = currentImagePath
            let closeBtn = document.createElement('div')
            closeBtn.classList.add('closeBtn')
            let closeIcon = document.createElement('img')
            closeIcon.src = '../../assets/icons/close.png'

            document.body.appendChild(container)
            container.appendChild(closeBtn)
            closeBtn.appendChild(closeIcon)
            container.appendChild(currentImg)
            console.log(currentImagePath);
            container.classList.add('fullGalActiv')
            container.addEventListener('click', ()=>{
                container.classList.remove('fullGalActiv')
            })
            window.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    container.classList.remove('fullGalActiv')
                }
            })
            
        })
        
        
    })

    currentItemsVideo.forEach(currentItem =>{
        currentItem.addEventListener('click', ()=>{
            let container = document.createElement('div')
            container.classList.add('fullScreenGallery')
            let currentImagePath = currentItem.src
            let currentImg = document.createElement('video')
            currentImg.src = currentImagePath
            currentImg.autoplay = true
            let closeBtn = document.createElement('div')
            closeBtn.classList.add('closeBtn')
            let closeIcon = document.createElement('img')
            closeIcon.src = '../../assets/icons/close.png'
            document.body.appendChild(container)
            container.appendChild(closeBtn)
            closeBtn.appendChild(closeIcon)
            container.appendChild(currentImg)
            console.log(currentImagePath);
            container.classList.add('fullGalActiv')
            container.addEventListener('click', ()=>{
                container.classList.remove('fullGalActiv')
            })
            window.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    container.classList.remove('fullGalActiv')
                }
            })
        })
        
    })



}

