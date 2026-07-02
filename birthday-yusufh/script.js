/* ==========================================
   HAPPY BIRTHDAY YUSUF
   PART 1
========================================== */

// Typing Effect
const text = "🎉 Happy Birthday Yusuf Nura 🎂";
const typing = document.getElementById("typing");

let i = 0;

function typeText() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeText, 100);

    }

}

typeText();


// =========================
// Live Clock
// =========================

function updateClock() {

    const now = new Date();

    document.getElementById("time").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("date").innerHTML =
        now.toDateString();

}

setInterval(updateClock,1000);

updateClock();


// =========================
// Music Button
// =========================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function(){

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

    }else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

    }

};


// =========================
// Balloon Generator
// =========================

const balloonBox = document.getElementById("balloons");

const balloonColors = [

"#ff1744",
"#ff9800",
"#ffeb3b",
"#4caf50",
"#03a9f4",
"#3f51b5",
"#9c27b0",
"#e91e63"

];

for(let b=0;b<35;b++){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.background=
    balloonColors[
    Math.floor(Math.random()*balloonColors.length)];

    balloon.style.animationDuration=
    (6+Math.random()*8)+"s";

    balloon.style.animationDelay=
    Math.random()*5+"s";

    balloonBox.appendChild(balloon);

}


// =========================
// Heart Generator
// =========================

const heartBox=document.getElementById("hearts");

setInterval(()=>{

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.animationDuration=
    (4+Math.random()*4)+"s";

    heartBox.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

},500);


// =========================
// Celebrate Button
// =========================

const celebrate=document.getElementById("celebrate");

celebrate.onclick=function(){

    alert("🎉 Happy Birthday Yusuf! May Allah bless your new age with happiness, success, peace and endless Barakah. Ameen 🤲");

};