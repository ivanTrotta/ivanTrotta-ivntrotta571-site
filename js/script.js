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
