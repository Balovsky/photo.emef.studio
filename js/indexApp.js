
const ContentBoxes = document.querySelectorAll('.coding, .photography, .graphic, .headerIndex')


ContentBoxes.forEach((contentBox, index) =>{
    contentBox.addEventListener('click', ()=>{
        switch (index){
            case 0:
                window.location.href = './index.html';
                break;
            case 1:
                window.location.href = '../../pages/coding/codeHomePage.html';
                break;
            case 2:
                window.location.href = '../../pages/photography/photoHome.html';
                break;
            case 3:
                window.location.href = '../../pages/graphic/homeGraphic.html';
                break;
        }
    })
})
