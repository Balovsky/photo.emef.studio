// Przykład zdjęć z lokalnego folderu
const galleryItems = [
    { src: '2.jpg', srct: '2.jpg', title: 'Obrazek 1', tags: 'aranżacyjne'},
    { src: '72 3s.gif', srct: '72 3s.gif', title: 'Obrazek 1', tags: '360'},
    { src: '3.jpg', srct: '3.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '4.jpg', srct: '4.jpg', title: 'Obrazek 1', tags: 'aranżacyjne'},
    { src: '5.jpg', srct: '5.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '6.jpg', srct: '6.jpg', title: 'Obrazek 1', tags: 'aranżacyjne'},
    { src: '7.jpg', srct: '7.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '8.jpg', srct: '8.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '9.jpg', srct: '9.jpg', title: 'Obrazek 1', tags: 'aranżacyjne'},
    { src: '10.jpg', srct: '10.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '11.jpg', srct: '11.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '12.jpg', srct: '12.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '13.jpg', srct: '13.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '14.jpg', srct: '14.jpg', title: 'Obrazek 1', tags: 'aranżacyjne'},
    { src: '15.jpg', srct: '15.jpg', title: 'Obrazek 1', tags: 'aranżacyjne'},
    { src: '16.jpg', srct: '16.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: '17.jpg', srct: '17.jpg', title: 'Obrazek 1', tags: 'packshoty'},
    { src: 'gil9.gif', srct: 'gil9.gif', title: 'Obrazek 1', tags: '360'},
    { src: 'video1.gif', srct: 'video1.gif', title: 'Obrazek 1', tags: 'video'},
    { src: 'video3.gif', srct: 'video3.gif', title: 'Obrazek 1', tags: 'video'},
    { src: 'video5.gif', srct: 'video5.gif', title: 'Obrazek 1', tags: 'video'},
    { src: 'video6.gif', srct: 'video6.gif', title: 'Obrazek 1', tags: 'video'},
    { src: 'video7.gif', srct: 'video7.gif', title: 'Obrazek 1', tags: 'video'},
    { src: 'video8.gif', srct: 'video8.gif', title: 'Obrazek 1', tags: 'video'},
    { src: 'gil8.gif', srct: 'gil8.gif', title: 'Obrazek 1', tags: '360'},
    { src: 'gil7.gif', srct: 'gil7.gif', title: 'Obrazek 1', tags: 'video'},
    
];

$(document).ready(function() {
    $("#my_nanogallery").nanogallery2({
        // Ustawienia galerii
        itemsBaseURL: '../assets/gallery/', // Ścieżka do lokalnego folderu ze zdjęciami
        thumbnailWidth: 'auto',
        thumbnailHeight: 400,
        galleryDisplayMode: 'fullContent',
        items: galleryItems,
        "colorSchemeViewer": {
          "thumbnail": {
            "background": "#000"
          }
        },
        thumbnailSelected: '<img src="../assets/icons/record.png" alt="">', // wybrana ikona 
        thumbnailUnselected: '<img src="../assets/icons/record.png" alt="">', // niewybrana ikona 
        thumbnailDisplayTransition: "flipUp",
        thumbnailDisplayTransitionDuration: 5,
        thumbnailDisplayInterval: 5,
        thumbnailLabel: {
            position: "overImageOnBottom",
            display: false,
            titleMultiLine: false,
            displayDescription: false,
            descriptionMultiLine: false
        },
        allowHTMLinData: true,
        thumbnailHoverEffect2: "image_grayscale_100%_0%_400",
        galleryMaxRows: 10,
        galleryDisplayMoreStep: 4,
        thumbnailAlignment: "center",
        galleryFilterTags: true, // Poprawne ustawienie
        thumbnailLevelUp: true,
        thumbnailOpenImage: true,
        thumbnailBorderHorizontal: 0,
        thumbnailBorderVertical: 0,
        thumbnailL1DisplayOrder: 'random',
        viewerTools: { 
            topLeft: 'pageCounter', 
            topRight: 'playPauseButton, zoomButton, fullscreenButton,shareButton, closeButton' 
          },
          galleryL1FilterTagsMode: 'single',
          viewerGallery: 'bottom',
          viewerGalleryTWidth: 100,
          viewerGalleryTHeight: 100,
          icons: {
            navigationFilterSelectedAll: 'pokaż wszystkie'
          },
          thumbnailDisplayTransition: 'scaleUp',
          galleryL1Sorting: 'random',
          
    });

});


