const shareBtn = document.querySelector(".share-btn");
let isHovered = false;

const shareIcon = document.querySelector('.share-icon');

shareBtn.addEventListener('mouseover', () => {
    isHovered = true;
    console.log('Hover-Zustand:', isHovered);

    shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)';
    shareIcon.style.fill = '#ffffff';

    
});

shareBtn.addEventListener('mouseout', () =>{
    isHovered = false;
    console.log('Hover-Zustand:', isHovered);

    shareBtn.style.backgroundColor = 'hsl(210,46%,95%)';
    shareIcon.style.fill = '#6E8098';
});