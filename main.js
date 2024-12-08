const shareBtn = document.querySelector(".share-btn");
const shareBubble = document.querySelector(".share-bubble");
const shareContainer = document.querySelector(".share-container");
const shareIcon = document.querySelector('.share-icon');

const newShare = document.querySelector('.new-Share');
const newIcon = document.querySelector('.new-Icon');
const mobileShare = document.querySelector('.MobileShare');
const mobileNormal = document.querySelector('.AuthorRow');

let isShown = false;


//Desktop Sharebubble settings
function showBubble(){
    shareBubble.style.visibility = "visible";
    shareBubble.style.opacity = "1";
};

function hideBubble(){
    shareBubble.style.visibility = "hidden";
    shareBubble.style.opacity = "0";
};



//Mobile Share  settings
function showMobileShare(){
    mobileShare.style.display = "flex";
    mobileNormal.style.display = "none";
};

function hideMobileShare(){
    mobileNormal.style.display = "flex";
    mobileShare.style.display = "none";
};



//Desktop Hoverstate 
shareBtn.addEventListener('mouseover', () => {
    shareBtn.style.backgroundColor = 'hsl(214, 17%, 51%)';
    shareIcon.style.fill = '#ffffff';
});

shareBtn.addEventListener('mouseout', () =>{
    shareBtn.style.backgroundColor = 'hsl(210,46%,95%)';
    shareIcon.style.fill = '#6E8098';
});



//Share-Bubble-Logic on Desktop
shareBtn.addEventListener('click', () => {
    if(!isShown){
    showBubble();
    isShown = true;
    } else{
    hideBubble();
    isShown = false;
    }
});



//Mobile-Hoverstate
newShare.addEventListener('mouseover', () => {
    newShare.style.backgroundColor = 'hsl(210,46%,95%)';
    newIcon.style.fill = 'hsl(214, 17%, 51%)';
});

newShare.addEventListener('mouseout', () =>{
    newShare.style.backgroundColor = 'hsl(214, 17%, 51%)';
    newIcon.style.fill = '#ffffff';
});


//Share-Div-Logic on mobile
newShare.addEventListener('click', () => {
    if(isShown){
    showMobileShare();
    isShown = true;
    } else{
    hideMobileShare();
    isShown = false;
    }
});