const shareBtn = document.querySelector(".share-btn");
const shareBubble = document.querySelector(".share-bubble");
const shareContainer = document.querySelector(".share-container");
const shareIcon = document.querySelector('.share-icon');

let isShown = false;

function showBubble(){
    shareBubble.style.visibility = "visible";
    shareBubble.style.opacity = "1";
};

function hideBubble(){
    shareBubble.style.visibility = "hidden";
    shareBubble.style.opacity = "0";
};


//Hoverstate
shareBtn.addEventListener('mouseover', () => {
    shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)';
    shareIcon.style.fill = '#ffffff';
});

shareBtn.addEventListener('mouseout', () =>{
    shareBtn.style.backgroundColor = 'hsl(210,46%,95%)';
    shareIcon.style.fill = '#6E8098';
});

shareBtn.addEventListener('click', () => {
    if(!isShown){
    showBubble();
    isShown = true;
    } else{
    hideBubble();
    isShown = false;
    }
});


