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
