// conta clip
const clips = document.querySelectorAll(".clip-box").length;
document.getElementById("total-clips").innerText = clips;

// conta like
let totalLikes = 0;

for(let i = 1; i <= 50; i++){
    let saved = localStorage.getItem("clip" + i);
    if(saved){
        totalLikes += parseInt(saved);
    }
}

document.getElementById("total-likes").innerText = totalLikes;

// views fake (per ora)
document.getElementById("total-views").innerText = totalLikes * 3;