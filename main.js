const shareBtn = document.querySelector(".share-btn");
const shareBubble = document.querySelector(".share-bubble");
const shareIcon = document.querySelector('.share-icon');

const mobileShare = document.querySelector('.MobileShare');
const mobileNormal = document.querySelector('.AuthorRow');

let isShown = false; // Zustand für Sichtbarkeit von Bubble/MobileShare

// Funktion zur Überprüfung, ob wir uns in der mobilen Ansicht befinden
function isMobileView() {
    return window.matchMedia('(max-width: 600px)').matches;
}

// Desktop-Share-Bubble anzeigen
function showBubble() {
    shareBubble.style.visibility = "visible";
    shareBubble.style.opacity = "1";
}

// Desktop-Share-Bubble ausblenden
function hideBubble() {
    shareBubble.style.visibility = "hidden";
    shareBubble.style.opacity = "0";
}

// Mobile-Share anzeigen
function showMobileShare() {
    mobileShare.style.display = "flex";
    mobileNormal.style.display = "none";
}

// Mobile-Share ausblenden
function hideMobileShare() {
    mobileNormal.style.display = "flex";
    mobileShare.style.display = "none";
}

// Share-Button-Klick-Logik
shareBtn.addEventListener('click', () => {
    if (isMobileView()) {
        // Mobile-Logik
        if (!isShown) {
            showMobileShare(); // Mobile Share anzeigen
        } else {
            hideMobileShare(); // Zurück zur AuthorRow
        }
    } else {
        // Desktop-Logik
        if (!isShown) {
            showBubble(); // Desktop Bubble anzeigen
        } else {
            hideBubble(); // Desktop Bubble ausblenden
        }
    }
    isShown = !isShown; // Zustand umschalten
});

// Auf Bildschirmgröße reagieren und Zustand zurücksetzen
function handleResize() {
    if (!isMobileView()) {
        // Wechsel zur Desktop-Ansicht
        hideMobileShare(); // Mobile-Ansicht ausblenden
        hideBubble(); // Bubble ebenfalls ausblenden
    } else {
        // Wechsel zur mobilen Ansicht
        hideBubble(); // Desktop-Bubble ausblenden
        hideMobileShare(); // Mobile-Ansicht ebenfalls ausblenden
    }
    isShown = false; // Zustand zurücksetzen
}

// EventListener für die Bildschirmgröße
window.addEventListener('resize', handleResize);

// Initiale Überprüfung bei Laden der Seite
handleResize();
