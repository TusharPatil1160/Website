/* ==========================================
   EASY CUSTOMIZATION
========================================== */

const girlfriendName = "Your Girlfriend ❤️";
const yourName = "Your Name ❤️";
const PASSWORD = "19082707";

// Change this to your relationship date
// Format: YYYY-MM-DD
const relationshipDate = "2026-07-27";

/* ==========================================
   TYPING EFFECT
========================================== */

const typing = document.getElementById("typing");

const message = "Happy Girlfriend Day ❤️";

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 120);

    }

}

typeWriter();

/* ==========================================
   LOVE COUNTER
========================================== */

const startDate = new Date(relationshipDate);

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCounter();

setInterval(updateCounter,1000);

/* ==========================================
   FLOATING HEARTS
========================================== */

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = Math.random()*25 + 15 + "px";

    heart.style.animationDuration = Math.random()*6 + 5 + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,300);

/* ==========================================
   RANDOM LOVE QUOTES
========================================== */

const quotes = [

"Every love story is beautiful, but ours is my favorite. ❤️",

"I fall in love with you more every single day.",

"You are my today, tomorrow and forever.",

"Home is wherever I'm with you.",

"You are the reason behind my smile.",

"My favorite place is beside you.",

"I choose you. Every day.",

"You complete my world ❤️",

"Forever isn't enough with you.",

"You make my life beautiful."

];

const quote = document.getElementById("quote");

function randomQuote(){

    const random = Math.floor(Math.random()*quotes.length);

    quote.innerHTML = quotes[random];

}

randomQuote();

setInterval(randomQuote,5000);

/* ==========================================
   MUSIC
========================================== */

const song = document.getElementById("song");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        song.play();

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }else{

        song.pause();

        musicBtn.innerHTML="▶ Play Music";

        playing=false;

    }

});

/* ==========================================
   POPUP
========================================== */

const popup = document.getElementById("popup");

const surpriseBtn = document.getElementById("surpriseBtn");

const close = document.getElementById("close");

surpriseBtn.onclick=()=>{

    popup.classList.add("show");

}

close.onclick=()=>{

    popup.classList.remove("show");

}

window.onclick=(e)=>{

    if(e.target===popup){

        popup.classList.remove("show");

    }

}
/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".card, .box, .event, .paper, .gallery-grid img"
);

revealElements.forEach((el) => {
    el.classList.add("fade-up");
});

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ==========================================
   HERO BUTTON SCROLL
========================================== */

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.querySelector("#letter").scrollIntoView({

        behavior: "smooth"

    });

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll("button").forEach((button) => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left =
            e.offsetX - diameter / 2 + "px";

        circle.style.top =
            e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

/* ==========================================
   HEART CURSOR TRAIL
========================================== */

document.addEventListener("mousemove", (e) => {

    if (Math.random() > 0.7) {

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = e.clientX + "px";

        heart.style.top = e.clientY + "px";

        heart.style.pointerEvents = "none";

        heart.style.fontSize = "16px";

        heart.style.zIndex = "9999";

        heart.style.transition = "1s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform = "translateY(-60px)";
            heart.style.opacity = "0";

        }, 20);

        setTimeout(() => {

            heart.remove();

        }, 1000);

    }

});

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "99999";

        const image = document.createElement("img");

        image.src = img.src;

        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";
        image.style.border = "4px solid white";

        overlay.appendChild(image);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

        document.body.appendChild(overlay);

    });

});

/* ==========================================
   SIMPLE CONFETTI
========================================== */

function launchConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.width = "8px";

        confetti.style.height = "8px";

        confetti.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        confetti.style.pointerEvents = "none";

        confetti.style.zIndex = "99999";

        confetti.style.transition = "4s linear";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(720deg)`;

            confetti.style.opacity = "0";

        }, 20);

        setTimeout(() => {

            confetti.remove();

        }, 4200);

    }

}

surpriseBtn.addEventListener("click", launchConfetti);

/* ==========================================
   FOOTER YEAR
========================================== */

const footer = document.querySelector("footer p");

footer.innerHTML =
    `Made with ❤️ by ${yourName} • ${new Date().getFullYear()}`;

/* ==========================================
   WELCOME MESSAGE
========================================== */

setTimeout(() => {

    console.log(
        `❤️ Welcome ${girlfriendName}! This page was made with love.`
    );

}, 1000);

/* ==========================================
   END
========================================== */