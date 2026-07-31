const home = document.getElementById("home");
const letter = document.getElementById("letter");
const memories = document.getElementById("memories");
const playlist = document.getElementById("playlist");
const anniversary = document.getElementById("anniversary");
const finalPage = document.getElementById("final");

// HOME -> LETTER
document.getElementById("openGift").onclick = () => {
    home.classList.add("hidden");
    letter.classList.remove("hidden");
};

// LETTER -> MEMORIES
document.getElementById("nextPage").onclick = () => {
    letter.classList.add("hidden");
    memories.classList.remove("hidden");
};

// MEMORIES -> PLAYLIST
document.getElementById("playlistBtn").onclick = () => {
    memories.classList.add("hidden");
    playlist.classList.remove("hidden");
};

// PLAYLIST -> ANNIVERSARY
document.getElementById("continueBtn").onclick = () => {

    playlist.classList.add("hidden");

    anniversary.classList.remove("hidden");

    anniversary.style.animation = "fadeIn 1s";

};

// ANNIVERSARY -> FINAL
document.getElementById("finalBtn").onclick = () => {

    anniversary.classList.add("hidden");

    finalPage.classList.remove("hidden");

    finalPage.style.animation = "fadeIn 1s";

    startHearts();

};

// SPOTIFY
function openPlaylist(){
    window.open(
        "https://open.spotify.com/playlist/74B3h1mX6UKKHjVS6r0nEF",
        "_blank"
    );
}

// COUNTER
const startDate = new Date("June 16, 2026 00:00:00");

function updateCounter(){

    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor(diff/(1000*60*60))%24;
    const minutes = Math.floor(diff/(1000*60))%60;
    const seconds = Math.floor(diff/1000)%60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCounter,1000);
updateCounter();

// FLOATING HEARTS
function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="floating-heart";

const hearts=["❤️","💖","💕","💗","💘"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},450);

}
