var a = document.getElementById("audio");
var arr = [
    {
        "song": "music/01Zaalima - Raees .mp3",
        "title": "Zaalima (Arijit Singh) 190kbps Lorem ipsum dolor sit amet consectetur.",
        "artist": "Arijit Singh.",
        "image": "images/zaalima.jpg"
    },
    {
        "song": "music/02channa mere aa .mp3",
        "title": "Channa Mereya (Arijit Singh) 190kbps Lorem ipsum dolor sit amet consectetur.",
        "artist": "Arijit Singh..",
        "image": "images/channa.jpg"
    },
    {
        "song": "music/03Sawan aaya hai.mp3",
        "title": "Sawan Aaya Hai (Arijit Singh) 190kbps Lorem ipsum dolor sit amet consectetur.",
        "artist": "Arijit Singh...",
        "image": "images/Arjit.jpg"
    }
]
function aplay() {
    a.play();
    document.getElementById('pl').style.display = "none";
    document.getElementById('pa').style.display = "inline";
}
function apause() {
    a.pause();
    document.getElementById('pl').style.display = "inline";
    document.getElementById('pa').style.display = "none";
}
var i = 0;
function nxt() {
    i++;
    if (arr.length == i) {
        i = 0;
    }
    a.src = arr[i].song;
    document.getElementById("box").style.backgroundImage = "url("+arr[i].image +")";
    a.play();
    document.getElementById('pl').style.display = "none";
    document.getElementById('pa').style.display = "inline";
    document.getElementById('tit').innerHTML=arr[i].title;
    document.getElementById('Artist').innerHTML=arr[i].artist;
}
var i = 0;
function pre() {
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    a.src = arr[i].song;
    document.getElementById("box").style.backgroundImage = "url("+arr[i].image +")";
    a.play()
    document.getElementById('pl').style.display = "none";
    document.getElementById('pa').style.display = "inline";
    document.getElementById('tit').innerHTML=arr[i].title;
    document.getElementById('Artist').innerHTML=arr[i].artist;
}
