const noteLog = document.getElementById("note-history-box");
let muted = true;
const A3 = document.getElementById("A3");
const A4 = document.getElementById("A4");
const A5 = document.getElementById("A5");
const B3 = document.getElementById("B3");
const B4 = document.getElementById("B4");
const B5 = document.getElementById("B5");
const C3 = document.getElementById("C3");
const C4 = document.getElementById("C4");
const C5 = document.getElementById("C5");
const D3 = document.getElementById("D3");
const D4 = document.getElementById("D4");
const D5 = document.getElementById("D5");
const E3 = document.getElementById("E3");
const E4 = document.getElementById("E4");
const E5 = document.getElementById("E5");
const F3 = document.getElementById("F3");
const F4 = document.getElementById("F4");
const F5 = document.getElementById("F5");
const G3 = document.getElementById("G3");
const G4 = document.getElementById("G4");
const G5 = document.getElementById("G5");

const Asharp3 = document.getElementById("A#3");
const Asharp4 = document.getElementById("A#4");
const Asharp5 = document.getElementById("A#5");
const Fsharp3 = document.getElementById("F#3");
const Fsharp4 = document.getElementById("F#4");
const Fsharp5 = document.getElementById("F#5");
const Csharp3 = document.getElementById("C#3");
const Csharp4 = document.getElementById("C#4");
const Csharp5 = document.getElementById("C#5");
const Dsharp3 = document.getElementById("D#3");
const Dsharp4 = document.getElementById("D#4");
const Dsharp5 = document.getElementById("D#5");
const Gsharp3 = document.getElementById("G#3");
const Gsharp4 = document.getElementById("G#4");
const Gsharp5 = document.getElementById("G#5");

const freePlayOption = document.getElementById("freeplay-option");
const songsOption = document.getElementById("songs-option");
freePlayOption.addEventListener('click', () => changeHeaderColor("#93C393", "darkslategrey", "freeplay"));
songsOption.addEventListener('click', () => changeHeaderColor("#98d5f7", "#5B7C99", "songs"));


function changeHeaderColor(bgcolor, txtcolor, foo){
    const headerBar = document.getElementById("header-bar");
    headerBar.style.backgroundColor = bgcolor;
    headerBar.style.color = txtcolor;
    if (foo == "freeplay"){
        muted = false;
        const welcomePage = document.getElementById("welcome-page");
        welcomePage.style.display = "none";
        const freeplayPiano = document.getElementById("freeplay-div");
        freeplayPiano.style.display = "block";
        document.body.style.backgroundColor = "#b1fbb3"
    }
    if (foo == "songs"){
        const welcomePage = document.getElementById("welcome-page");
        welcomePage.style.display = "none";
        const songSelect= document.getElementById("song-select");
        songSelect.style.display = "block";
        document.body.style.backgroundColor = "#b1fbfb"
    }
}


function playNote(noteName, noteLogName, note) {
    if (muted){
        return;
    }
    const audio = new Audio(`sounds/${noteName}.mp3`);
    audio.play();
    noteLog.value += noteLogName + " "
    note.classList.add('active');
    setTimeout(() => note.classList.remove('active'), 100);
}



A3.addEventListener('click', () => playNote("A3", "A3", A3));
A4.addEventListener('click', () => playNote("A4", "A4", A4));
A5.addEventListener('click', () => playNote("A5", "A5", A5));
B3.addEventListener('click', () => playNote("B3", "B3", B3));
B4.addEventListener('click', () => playNote("B4", "B4", B4));
B5.addEventListener('click', () => playNote("B5", "B5", B5));
C3.addEventListener('click', () => playNote("C3", "C3", C3));
C4.addEventListener('click', () => playNote("C4", "C4", C4));
C5.addEventListener('click', () => playNote("C5", "C5", C5));
D3.addEventListener('click', () => playNote("D3", "D3", D3));
D4.addEventListener('click', () => playNote("D4", "D4", D4));
D5.addEventListener('click', () => playNote("D5", "D5", D5));
E3.addEventListener('click', () => playNote("E3", "E3", E3));
E4.addEventListener('click', () => playNote("E4", "E4", E4));
E5.addEventListener('click', () => playNote("E5", "E5", E5));
F3.addEventListener('click', () => playNote("F3", "F3", F3));
F4.addEventListener('click', () => playNote("F4", "F4", F4));
F5.addEventListener('click', () => playNote("F5", "F5", F5));
G3.addEventListener('click', () => playNote("G3", "G3", G3));
G4.addEventListener('click', () => playNote("G4", "G4", G4));
G5.addEventListener('click', () => playNote("G5", "G5", G5));

Asharp3.addEventListener('click', () => playNote("Asharp3", "A#3", Asharp3));
Asharp4.addEventListener('click', () => playNote("Asharp4", "A#4", Asharp4));
Asharp5.addEventListener('click', () => playNote("Asharp5", "A#5", Asharp5));
Fsharp3.addEventListener('click', () => playNote("Fsharp3", "F#3", Fsharp3));
Fsharp4.addEventListener('click', () => playNote("Fsharp4", "F#4", Fsharp4));
Fsharp5.addEventListener('click', () => playNote("Fsharp5", "F#5", Fsharp5));
Csharp3.addEventListener('click', () => playNote("Csharp3", "C#3", Csharp3));
Csharp4.addEventListener('click', () => playNote("Csharp4", "C#4", Csharp4));
Csharp5.addEventListener('click', () => playNote("Csharp5", "C#5", Csharp5));
Dsharp3.addEventListener('click', () => playNote("Dsharp3", "D#3", Dsharp3));
Dsharp4.addEventListener('click', () => playNote("Dsharp4", "D#4", Dsharp4));
Dsharp5.addEventListener('click', () => playNote("Dsharp5", "D#5", Dsharp5));
Gsharp3.addEventListener('click', () => playNote("Gsharp3", "G#3", Gsharp3));
Gsharp4.addEventListener('click', () => playNote("Gsharp4", "G#4", Gsharp4));
Gsharp5.addEventListener('click', () => playNote("Gsharp5", "G#5", Gsharp5));


document.addEventListener('keydown', event => {
  if (event.key.toLowerCase() === 'u') {
    playNote("A3", "A3", A3);
  }
  if (event.key.toLowerCase() === 'j') {
    playNote("A4", "A4", A4);
  }
  if (event.key.toLowerCase() === 'n') {
    playNote("A5", "A5", A5);
  }
  if (event.key.toLowerCase() === 'i') {
    playNote("B3", "B3", B3);
  }
  if (event.key.toLowerCase() === 'k') {
    playNote("B4", "B4", B4);
  }
  if (event.key.toLowerCase() === 'm') {
    playNote("B5", "B5", B5);
  }
  if (event.key.toLowerCase() === 'w') {
    playNote("C3", "C3", C3);
  }
  if (event.key.toLowerCase() === 's') {
    playNote("C4", "C4", C4);
  }
  if (event.key.toLowerCase() === 'z') {
    playNote("C5", "C5", C5);
  }
  if (event.key.toLowerCase() === 'e') {
    playNote("D3", "D3", D3);
  }
  if (event.key.toLowerCase() === 'd') {
    playNote("D4", "D4", D4);
  }
  if (event.key.toLowerCase() === 'x') {
    playNote("D5", "D5", D5);
  }
  if (event.key.toLowerCase() === 'r') {
    playNote("E3", "E3", E3);
  }
  if (event.key.toLowerCase() === 'f') {
    playNote("E4", "E4", E4);
  }
  if (event.key.toLowerCase() === 'c') {
    playNote("E5", "E5", E5);
  }
  if (event.key.toLowerCase() === 't') {
    playNote("F3", "F3", F3);
  }
  if (event.key.toLowerCase() === 'g') {
    playNote("F4", "F4", F4);
  }
  if (event.key.toLowerCase() === 'v') {
    playNote("F5", "F5", F5);
  }
  if (event.key.toLowerCase() === 'y') {
    playNote("G3", "G3", G3);
  }
  if (event.key.toLowerCase() === 'h') {
    playNote("G4", "G4", G4);
  }
  if (event.key.toLowerCase() === 'b') {
    playNote("G5", "G5", G5);
  }

  if (event.key.toLowerCase() === '5') {
    playNote("Asharp3", "A#3", Asharp3);
  }
  if (event.key.toLowerCase() === '0') {
    playNote("Asharp4", "A#4", Asharp4);
  }
  if (event.key.toLowerCase() === ']') {
    playNote("Asharp5", "A#5", Asharp5);
  }
  if (event.key.toLowerCase() === '3') {
    playNote("Fsharp3", "F#3", Fsharp3);
  }
  if (event.key.toLowerCase() === '8') {
    playNote("Fsharp4", "F#4", Fsharp4);
  }
  if (event.key.toLowerCase() === 'p') {
    playNote("Fsharp5", "F#5", Fsharp5);
  }
  if (event.key.toLowerCase() === '1') {
    playNote("Csharp3", "C#3", Csharp3);
  }
  if (event.key.toLowerCase() === '6') {
    playNote("Csharp4", "C#4", Csharp4);
  }
  if (event.key.toLowerCase() === '-') {
    playNote("Csharp5", "C#5", Csharp5);
  }
  if (event.key.toLowerCase() === '2') {
    playNote("Dsharp3", "D#3", Dsharp3);
  }
  if (event.key.toLowerCase() === '7') {
    playNote("Dsharp4", "D#4", Dsharp4);
  }
  if (event.key.toLowerCase() === '=') {
    playNote("Dsharp5", "D#5", Dsharp5);
  }
  if (event.key.toLowerCase() === '4') {
    playNote("Gsharp3", "G#3", Gsharp3);
  }
  if (event.key.toLowerCase() === '9') {
    playNote("Gsharp4", "G#4", Gsharp4);
  }
  if (event.key.toLowerCase() === '[') {
    playNote("Gsharp5", "G#5", Gsharp5);
  }
});

function switchPage(){
    window.location.href = "index1.html";
}

const song1 = document.getElementById("song1");
song1.addEventListener('click', () => startSong("song1"));

function startSong(songID){
    const guidedPiano = document.getElementById("guided-piano");
    guidedPiano.style.display = "block";
    const noteArea = document.getElementById("note-area");
    noteArea.style.display = "block";
    const pianoArea = document.getElementById("piano-area");
    pianoArea.style.display = "block";
    const songSelect1 = document.getElementById("song-select");
    songSelect1.style.display = "none";
    muted = false;
    if (songID == "song1"){

    }
}
