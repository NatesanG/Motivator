
// ==================================
// GET HTML ELEMENTS
// ==================================

const motivateBtn = document.getElementById("motivateBtn");

const popupOverlay = document.getElementById("popupOverlay");

const closePopup = document.getElementById("closePopup");

const anotherMessage = document.getElementById("anotherMessage");

const messageText = document.getElementById("messageText");

const messageSign = document.getElementById("messageSign");


// ==================================
// MOTIVATIONAL MESSAGES
// ==================================

const messages = [

    "En chellame! Don't underestimate yourself. You are capable of doing amazing things. I believe in you! 💗",

    "Hey azhagii! Whatever happens today, don't forget that you have someone who is always proud of you. That's me! 🥺",

    "Take a deep breath, kutty. Everything will be okay. One step at a time. You got this! 🌷",

    "I wish I could be there right now to give you a big hug and tell you how amazing you are. 🤗",

    "Even on your worst days, you are still my favourite person. Never forget that! ❤️",

    "Enna aanaalum don't give up! I know how much effort you put into everything. Keep going, my girl! ✨",

    "You don't have to be perfect. Just be yourself. That's more than enough for me. 💞",

    "If you ever doubt yourself, remember that I will never doubt you. I know you can do it! 🌸",

    "My little girl, don't stress too much. You are doing better than you think. I'm always cheering for you! 💗",

    "No matter how difficult today gets, remember that tomorrow is another chance. Keep smiling, my azhagii! 🌻",

    "I know you can achieve everything you dream of. Never stop believing in yourself. Love you! ❤️",

    "If the world gets too heavy, remember you don't have to carry everything alone. I'm here for you! 🫂"

];


// ==================================
// SHUFFLE MESSAGE SYSTEM
// ==================================

let shuffledMessages = [];

let currentIndex = 0;


function shuffleMessages() {

    shuffledMessages = [...messages];

    // Fisher-Yates shuffle
    for (let i = shuffledMessages.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffledMessages[i], shuffledMessages[j]] =
        [shuffledMessages[j], shuffledMessages[i]];

    }

    currentIndex = 0;

}


// Get next message
function generateMessage() {

    // Shuffle again after all messages are used
    if (currentIndex >= shuffledMessages.length) {

        shuffleMessages();

    }

    const newMessage = shuffledMessages[currentIndex];

    currentIndex++;

    // Display message
    messageText.textContent = newMessage;

    messageSign.textContent =
        "With lots of love, your favourite person ♡";

}


// ==================================
// OPEN POPUP
// ==================================

motivateBtn.addEventListener("click", function () {

    generateMessage();

    popupOverlay.classList.add("active");

});


// ==================================
// ANOTHER MESSAGE
// ==================================

anotherMessage.addEventListener("click", function () {

    generateMessage();

});


// ==================================
// CLOSE POPUP
// ==================================

closePopup.addEventListener("click", function () {

    popupOverlay.classList.remove("active");

});


// ==================================
// CLICK OUTSIDE TO CLOSE
// ==================================

popupOverlay.addEventListener("click", function (event) {

    if (event.target === popupOverlay) {

        popupOverlay.classList.remove("active");

    }

});


// ==================================
// ESCAPE KEY TO CLOSE
// ==================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        popupOverlay.classList.remove("active");

    }

});


// ==================================
// INITIALIZE
// ==================================

shuffleMessages();

console.log("Motivator App Loaded Successfully 💗");
