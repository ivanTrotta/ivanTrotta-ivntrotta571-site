fetch("https://decapi.me/twitch/followers/ivantrotta571")
.then(response => response.text())
.then(data => {

document.getElementById("followers").innerText =
"Follower Twitch: " + data;

});
