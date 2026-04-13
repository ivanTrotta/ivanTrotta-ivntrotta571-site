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

// ===== MINIGIOCO =====

let score = 0;
let timeLeft = 10;
let gameActive = false;
let moveInterval;

function startGame(){
    const box = document.getElementById("game-box");
    const btn = document.getElementById("click-btn");

    if(!box || !btn) return;

    box.style.display = "block";

    score = 0;
    timeLeft = 10;
    gameActive = true;

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = timeLeft;

    moveButton();

    // movimento automatico
    let speed = 1000;

    moveInterval = setInterval(() => {
        if(gameActive){
            moveButton();

            if(speed > 300){
                speed -= 50;
                clearInterval(moveInterval);
                moveInterval = setInterval(moveButton, speed);
            }
        }
    }, speed);

    // timer
    let timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timer);
            clearInterval(moveInterval);
            gameActive = false;

            let record = localStorage.getItem("record") || 0;

            if(score > record){
                localStorage.setItem("record", score);
                alert("🔥 NUOVO RECORD!");
            }

            document.getElementById("record").innerText = localStorage.getItem("record") || 0;
        }

    }, 1000);
}

// movimento bottone
function moveButton(){
    const btn = document.getElementById("click-btn");
    const box = document.getElementById("game-box");

    if(!btn || !box) return;

    let maxX = box.clientWidth - 100;
    let maxY = box.clientHeight - 50;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// click
document.addEventListener("click", (e) => {
    if(e.target.id === "click-btn" && gameActive){
        score++;
        document.getElementById("score").innerText = score;
        moveButton();
    }
});

// scappa quando passi sopra
document.addEventListener("mouseover", (e) => {
    if(e.target.id === "click-btn" && gameActive){
        moveButton();
    }
});

// attivazione segreta
let secret = "";

window.addEventListener("keydown", (e) => {
    secret += e.key.toLowerCase();

    if(secret.includes("game")){
        startGame();
        secret = "";
    }
});

// carica record
window.addEventListener("load", () => {
    const rec = document.getElementById("record");
    if(rec){
        rec.innerText = localStorage.getItem("record") || 0;
    }
});

function toggleMenu(){
    const nav = document.getElementById("mobile-nav");

    if(nav){
        nav.classList.toggle("active");
    }
}

// ===== PARTICELLE =====

function createParticles(){

    const container = document.getElementById("particles");

    if(!container) return;

    for(let i = 0; i < 30; i++){

        let particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particle.style.width =
            particle.style.height =
            (Math.random() * 6 + 3) + "px";

        container.appendChild(particle);
    }

}

window.addEventListener("load", createParticles);

// ===== SECRET INSULTS =====

function randomInsult(){

    const insults = [

        "Uè test d cazz, ma addò vu j?",
        "Ma chi t crir? Stat zitt 😂",
        "Mamm ro carmn, t sì pers?",
        "Ngul a mammt, chest è zona privata 😈",
        "Scì scì vattenn, nun è pe tt 😤"

    ];

    let random =
        insults[Math.floor(Math.random() * insults.length)];

    document.getElementById("secret-subtext").innerText = random;

}

let clicks = 0;

document.querySelector(".profile-img").addEventListener("click", () => {

    clicks++;

    if(clicks >= 5){
        window.location.href = "secret.html";
    }

});
