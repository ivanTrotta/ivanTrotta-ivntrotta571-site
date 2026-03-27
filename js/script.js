const status = document.getElementById("live-status");

// Cambio manualmente
let isLive = false; // true = live, false = offline

if(isLive){
    status.textContent = "🟢 LIVE ORA";
    status.classList.add("live");
}else{
    status.textContent = "🔴 Offline";
    status.classList.add("offline");
}

const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.classList.add("show");
        }
    });
});

function likeClip(id, btn){
    let span = btn.querySelector("span");
    let count = localStorage.getItem(id) || 0;

    count++;
    localStorage.setItem(id, count);

    span.innerText = count;
}

// carica i like salvati
window.onload = function(){
    document.querySelectorAll(".like-btn").forEach((btn, index) => {
        let id = "clip" + (index + 1);
        let saved = localStorage.getItem(id);

        if(saved){
            btn.querySelector("span").innerText = saved;
        }
    });
}

function searchClips(){
    let input = document.getElementById("search").value.toLowerCase();
    let clips = document.querySelectorAll(".clip-box");

    clips.forEach(clip => {
        let text = clip.innerText.toLowerCase();
        clip.style.display = text.includes(input) ? "block" : "none";
    });
}


document.querySelectorAll(".views").forEach(v => {
    v.innerText = Math.floor(Math.random() * 1000);
});

function toggleTheme(){
    document.body.classList.toggle("light");
}

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1500); // tempo loading (1.5 secondi)
});

// 🎮 EASTER EGG KONAMI CODE
const secretCode = [
    "ArrowUp","ArrowUp",
    "ArrowDown","ArrowDown",
    "ArrowLeft","ArrowRight",
    "ArrowLeft","ArrowRight",
    "b","a"
];

let userInput = [];

window.addEventListener("keydown", (e) => {
    userInput.push(e.key);

    if(userInput.length > secretCode.length){
        userInput.shift();
    }

    if(JSON.stringify(userInput) === JSON.stringify(secretCode)){
        activateEasterEgg();
    }
});

function activateEasterEgg(){
    alert("🎉 HAI SBLOCCATO LA MODALITÀ SEGRETA!");

    document.body.style.background = "linear-gradient(45deg, red, purple, blue)";
    
    document.querySelectorAll(".clip-box").forEach(el => {
        el.style.transform = "rotate(5deg) scale(1.1)";
    });
}

function profileEasterEgg(){
    const img = document.querySelector(".profile-pic");

    // animazione rotazione + zoom
    img.style.transition = "0.5s";
    img.style.transform = "scale(1.5) rotate(360deg)";

    // effetto glow
    img.style.boxShadow = "0 0 30px #9146ff";

    // messaggio
    setTimeout(() => {
        alert("😎 Hai trovato l'easter egg segreto!");
    }, 300);

    // torna normale dopo
    setTimeout(() => {
        img.style.transform = "scale(1) rotate(0deg)";
        img.style.boxShadow = "none";
    }, 1500);
}

let seconds = 0;

setInterval(() => {
    seconds++;

    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    let display = `${min}:${sec < 10 ? "0" + sec : sec}`;

    const timer = document.getElementById("time-on-site");

    if(timer){
        timer.innerText = "⏱️ Tempo sul sito: " + display;
    }

}, 1000);

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    if(cursor){
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});
