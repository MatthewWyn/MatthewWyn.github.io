var songs = ["http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer01.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer02.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer03.mp3", 
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer04.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer05.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer06.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer07.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer08.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer09.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer10.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer11.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer12.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer13.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer14.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer15.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer16.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Valzer17.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-01.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-02.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-03.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-04.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-05.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-06.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-07.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-08.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-09.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-10.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-11.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Studio10-12.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Ballata1.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Ballata4.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude01.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude02.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude03.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude04.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude05.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude06.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude07.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude08.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude09.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude10.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude11.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude12.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude13.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude14.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude15.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude16.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude17.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude18.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude19.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude20.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude21.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude22.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude23.mp3",
"http://www.mp3classicalmusic.net/48Music/Chopin48/Prelude24.mp3",

];

var chopinLink = document.getElementById("chopinLink");
var audio = document.getElementById("audio");

function getItem(){
    chopinLink.src = songs[Math.floor(Math.random() * songs.length)];
    console.log("chopinLink src: " + chopinLink.src)
    audio.load();
    audio.play();
    
}

var changeSongButton = document.getElementById("changeSongButton");
changeSongButton.addEventListener("click", function(){
  getItem();
});






