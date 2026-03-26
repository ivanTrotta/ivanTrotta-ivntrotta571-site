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
