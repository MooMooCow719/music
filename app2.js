
let muted = false;
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



function playNote(noteName, noteLogName, note) {
    if (muted){
        return;
    }
    const audio = new Audio(`sounds/${noteName}.mp3`);
    audio.play();
    // noteLog.value += noteLogName + " "
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
  if (event.key.toLowerCase() === 'q') {
    skip();
  }
});

function switchPage(){
    window.location.href = "index.html";
}









let currentNoteIndex = 0;
let displayEnd = 10;

let currentNote = [];
let correctKeys = [];

let activeSongID = "";
let activeSongInfoArray = [];



const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");
const song5 = document.getElementById("song5");

song1.addEventListener('click', () => mainHandler("song1info"));
song2.addEventListener('click', () => mainHandler("song2info"));
song3.addEventListener('click', () => mainHandler("song3info"));
song4.addEventListener('click', () => mainHandler("song4info"));
song5.addEventListener('click', () => mainHandler("song5info"));

// START OF FUNCTIONS

function mainHandler(songID){
  activeSongID = songID;
  activeSongInfoArray = window[songID];

  if (songID == "song1info"){
    let nowplaying = document.getElementById("now-playing");
    nowplaying.textContent = "Now Playing: Fallen Down (Reprise)";
    nowplaying.style.fontSize = "3vh";
  }
  if (songID == "song2info"){
    let nowplaying = document.getElementById("now-playing");
    nowplaying.textContent = "Now Playing: nop";
    nowplaying.style.fontSize = "3vh";
  }
//   console.log(activeSongInfoArray);
//   console.log(activeSongInfoArray[0].length);
  // for (let i=0; i<activeSongInfoArray.length; i++){
  //   moveNotes(false);
  // }
  // for (let i=0; i<5; i++){
  //   moveNotes(false);
  // }
  moveNotes();
}






function makeNotes(){
  let bottom = 0;

  for (let i = currentNoteIndex; i < displayEnd; i++) {
    const row = activeSongInfoArray[i];
    if (!row) break; // SAFEGUARD: exit if undefined
    // console.log(currentNoteIndex);
    // console.log(displayEnd);
    for (let j = 0; j < row.length; j++) {
      // console.log("1");
      newNote = document.createElement("div");
      newNote.classList.add("test-note");
      newNote.style.bottom = `${bottom}vh`;
      document.getElementById(`${row[j]}div`).appendChild(newNote);
    }

    bottom += 5;
  }
}
  


const keysPressed = new Set();

document.addEventListener("keydown", (event) => {
  keysPressed.add(event.key.toLowerCase());

  const allKeysPressed = correctKeys.every((key) =>
    keysPressed.has(key.toLowerCase())
  );

  if (allKeysPressed) {
    nukeDisplay();
    currentNoteIndex++;
    displayEnd++;
    makeNotes();
    moveNotes();
  }
});

document.addEventListener("keyup", (event) => {
  keysPressed.delete(event.key.toLowerCase());
});


function moveNotes() {
  currentNote = activeSongInfoArray[currentNoteIndex];
  correctKeys = []; // now globally accessible

  makeNotes();

  for (let i = 0; i < currentNote.length; i++) {
    if (currentNote[i] == "C3") correctKeys.push("w");
    if (currentNote[i] == "C#3") correctKeys.push("1");
    if (currentNote[i] == "D3") correctKeys.push("e");
    if (currentNote[i] == "D#3") correctKeys.push("2");
    if (currentNote[i] == "E3") correctKeys.push("r");
    if (currentNote[i] == "F3") correctKeys.push("t");
    if (currentNote[i] == "F#3") correctKeys.push("3");
    if (currentNote[i] == "G3") correctKeys.push("y");
    if (currentNote[i] == "G#3") correctKeys.push("4");
    if (currentNote[i] == "A3") correctKeys.push("u");
    if (currentNote[i] == "A#3") correctKeys.push("5");
    if (currentNote[i] == "B3") correctKeys.push("i");

    if (currentNote[i] == "C4") correctKeys.push("s");
    if (currentNote[i] == "C#4") correctKeys.push("6");
    if (currentNote[i] == "D4") correctKeys.push("d");
    if (currentNote[i] == "D#4") correctKeys.push("7");
    if (currentNote[i] == "E4") correctKeys.push("f");
    if (currentNote[i] == "F4") correctKeys.push("g");
    if (currentNote[i] == "F#4") correctKeys.push("8");
    if (currentNote[i] == "G4") correctKeys.push("h");
    if (currentNote[i] == "G#4") correctKeys.push("9");
    if (currentNote[i] == "A4") correctKeys.push("j");
    if (currentNote[i] == "A#4") correctKeys.push("0");
    if (currentNote[i] == "B4") correctKeys.push("k");

    if (currentNote[i] == "C5") correctKeys.push("z");
    if (currentNote[i] == "C#5") correctKeys.push("-");
    if (currentNote[i] == "D5") correctKeys.push("x");
    if (currentNote[i] == "D#5") correctKeys.push("=");
    if (currentNote[i] == "E5") correctKeys.push("c");
    if (currentNote[i] == "F5") correctKeys.push("v");
    if (currentNote[i] == "F#5") correctKeys.push("p");
    if (currentNote[i] == "G5") correctKeys.push("b");
    if (currentNote[i] == "G#5") correctKeys.push("[");
    if (currentNote[i] == "A5") correctKeys.push("n");
    if (currentNote[i] == "A#5") correctKeys.push("]");
    if (currentNote[i] == "B5") correctKeys.push("m");
  }
}


// END OF FUNCTIONS









var song1info = [
  [
    "F#5",
    "D4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "A4",
    "D#4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "D#4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "B4",
    "D#4"
  ],
  [
    "E5",
    "B3"
  ],
  [
    "D#5",
    "D#4"
  ],
  [
    "E5",
    "F#4"
  ],
  [
    "F#5",
    "D#4"
  ],
  [
    "D#5",
    "F#4"
  ],
  [
    "B4",
    "D#4"
  ],
  [
    "F#5",
    "G3"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "G3"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "G5",
    "D4"
  ],
  [
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "E5",
    "A4"
  ],
  [
    "F#5",
    "F#4"
  ],
  [
    "E5",
    "C#4"
  ],
  [
    "E4"
  ],
  [
    "D5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "C#5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "A4",
    "D#4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "D#4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "B4",
    "D#4"
  ],
  [
    "E5",
    "B3"
  ],
  [
    "D#5",
    "D#4"
  ],
  [
    "E5",
    "F#4"
  ],
  [
    "F#5",
    "D#4"
  ],
  [
    "D#5",
    "F#4"
  ],
  [
    "B4",
    "D#4"
  ],
  [
    "F#5",
    "G3"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "G3"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "G5",
    "D4"
  ],
  [
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "E5",
    "A4"
  ],
  [
    "F#5",
    "F#4"
  ],
  [
    "E5",
    "C#4"
  ],
  [
    "E4"
  ],
  [
    "D5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "C#5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "A4",
    "D#4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "D#4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "B4",
    "D#4"
  ],
  [
    "E5",
    "B3"
  ],
  [
    "D#5",
    "D#4"
  ],
  [
    "E5",
    "F#4"
  ],
  [
    "F#5",
    "D#4"
  ],
  [
    "D#5",
    "F#4"
  ],
  [
    "B4",
    "D#4"
  ],
  [
    "F#5",
    "G3"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "B4",
    "B3"
  ],
  [
    "F#5",
    "G3"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "G5",
    "D4"
  ],
  [
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "E5",
    "A4"
  ],
  [
    "F#5",
    "F#4"
  ],
  [
    "E5",
    "C#4"
  ],
  [
    "E4"
  ],
  [
    "D5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "C#5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "F#5",
    "G3"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "A#4",
    "A#3"
  ],
  [
    "G5",
    "D4"
  ],
  [
    "A#3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "E5",
    "A4"
  ],
  [
    "F#5",
    "F#4"
  ],
  [
    "C#5",
    "D4"
  ],
  [
    "F#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "F#4"
  ],
  [
    "C#5",
    "A4"
  ],
  [
    "F#4"
  ],
  [
    "D5",
    "G4"
  ],
  [
    "D4"
  ],
  [
    "G4"
  ],
  [
    "A4",
    "D4"
  ],
  [
    "B4",
    "G4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "D5",
    "E4"
  ],
  [
    "C#4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "A3"
  ],
  [
    "D5",
    "B3"
  ],
  [
    "C#4"
  ],
  [
    "A4",
    "E4"
  ],
  [
    "F#4"
  ],
  [
    "C#4"
  ],
  [
    "B4",
    "F#4"
  ],
  [
    "A4",
    "C#4"
  ],
  [
    "G4",
    "G3"
  ],
  [
    "F#4",
    "A3"
  ],
  [
    "C#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "D4"
  ],
  [
    "E5",
    "G4"
  ],
  [
    "F#4"
  ],
  [
    "D5",
    "B3"
  ],
  [
    "D4"
  ],
  [
    "F#4"
  ],
  [
    "A4",
    "D4"
  ],
  [
    "B4",
    "F#4"
  ],
  [
    "C#5",
    "B3"
  ],
  [
    "D5",
    "A3"
  ],
  [
    "C#4"
  ],
  [
    "C#5",
    "E4"
  ],
  [
    "C#4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "A#4"
  ],
  [
    "F#5",
    "B4"
  ],
  [
    "F#4"
  ],
  [
    "E4"
  ],
  [
    "G5",
    "B3"
  ],
  [
    "F#5",
    "D4"
  ],
  [
    "E5",
    "G4"
  ],
  [
    "D5",
    "A4"
  ],
  [
    "F#4"
  ],
  [
    "E5",
    "E4"
  ],
  [
    "D4"
  ],
  [
    "C#5",
    "E4"
  ],
  [
    "F#4"
  ],
  [
    "D5",
    "G4"
  ],
  [
    "D4"
  ],
  [
    "G4"
  ],
  [
    "A4",
    "D4"
  ],
  [
    "B4",
    "G4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "D5",
    "E4"
  ],
  [
    "C#4"
  ],
  [
    "C#5",
    "F#4"
  ],
  [
    "A3"
  ],
  [
    "D5",
    "B3"
  ],
  [
    "C#4"
  ],
  [
    "A4",
    "E4"
  ],
  [
    "F#4"
  ],
  [
    "C#4"
  ],
  [
    "B4",
    "F#4"
  ],
  [
    "A4",
    "C#4"
  ],
  [
    "G4",
    "G3"
  ],
  [
    "F#4",
    "A3"
  ],
  [
    "C#4"
  ],
  [
    "F#5",
    "A4"
  ],
  [
    "D4"
  ],
  [
    "E5",
    "G4"
  ],
  [
    "F#4"
  ],
  [
    "D5",
    "B3"
  ],
  [
    "D4"
  ],
  [
    "F#4"
  ],
  [
    "A4",
    "D4"
  ],
  [
    "B4",
    "F#4"
  ],
  [
    "C#5",
    "B3"
  ],
  [
    "D5",
    "A3"
  ],
  [
    "C#4"
  ],
  [
    "C#5",
    "E4"
  ],
  [
    "C#4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "A#4"
  ],
  [
    "F#5",
    "B4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "F#5",
    "B4"
  ],
  [
    "D5",
    "F#4"
  ],
  [
    "E5",
    "B4"
  ],
  [
    "F#5",
    "F#4"
  ],
  [
    "E5",
    "C#4"
  ],
  [
    "E4"
  ],
  [
    "D5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "C#5",
    "A4"
  ],
  [
    "E4"
  ],
  [
    "A4",
    "A4",
    "D4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "A5",
    "A5",
    "D4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "E5",
    "E5",
    "C#4"
  ],
  [
    "D5",
    "A4",
    "E4"
  ],
  [
    "E5",
    "A4",
    "E4"
  ],
  [
    "F#5",
    "C#4"
  ],
  [
    "A4",
    "E4"
  ],
  [
    "D5"
  ],
  [
    "E5",
    "A4",
    "E4"
  ],
  [
    "D5",
    "D5",
    "B3"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "A5",
    "A5",
    "B3"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "A4",
    "A4",
    "A3"
  ],
  [
    "D5",
    "E4",
    "C#4"
  ],
  [
    "E5",
    "E4",
    "C#4"
  ],
  [
    "F#5",
    "A3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E5"
  ],
  [
    "A5",
    "E4",
    "C#4"
  ],
  [
    "F#5",
    "A4",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "G5",
    "D5",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "F#5",
    "D4",
    "B3"
  ],
  [
    "E5",
    "A5",
    "F#3"
  ],
  [
    "D4",
    "A3"
  ],
  [
    "D4",
    "A3"
  ],
  [
    "D5",
    "F#3"
  ],
  [
    "D4",
    "A3"
  ],
  [
    "E5",
    "B5",
    "D4",
    "A3"
  ],
  [
    "F#5",
    "A5",
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "G5",
    "E5",
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B5",
    "B3",
    "G3"
  ],
  [
    "A5",
    "D5",
    "A3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "A4",
    "A4",
    "D4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "A5",
    "A5",
    "D4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "E5",
    "E5",
    "C#4"
  ],
  [
    "D5",
    "A4",
    "E4"
  ],
  [
    "E5",
    "A4",
    "E4"
  ],
  [
    "F#5",
    "C#4"
  ],
  [
    "A4",
    "E4"
  ],
  [
    "D5"
  ],
  [
    "E5",
    "A4",
    "E4"
  ],
  [
    "D5",
    "D5",
    "B3"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "A5",
    "A5",
    "B3"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "A4",
    "A4",
    "A3"
  ],
  [
    "D5",
    "E4",
    "C#4"
  ],
  [
    "E5",
    "E4",
    "C#4"
  ],
  [
    "F#5",
    "A3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E5"
  ],
  [
    "A5",
    "E4",
    "C#4"
  ],
  [
    "F#5",
    "A4",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "G5",
    "D5",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "F#5",
    "D4",
    "B3"
  ],
  [
    "E5",
    "A5",
    "F#3"
  ],
  [
    "D4",
    "A3"
  ],
  [
    "D4",
    "A3"
  ],
  [
    "D5",
    "F#3"
  ],
  [
    "D4",
    "A3"
  ],
  [
    "E5",
    "B5",
    "D4",
    "A3"
  ],
  [
    "F#5",
    "A5",
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "G5",
    "E5",
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B5",
    "B3",
    "G3"
  ],
  [
    "A5",
    "D5",
    "A3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "A4"
  ],
  [
    "A5",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "F#5",
    "D4",
    "B3"
  ],
  [
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "E5"
  ],
  [
    "D5"
  ],
  [
    "C#5",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D5",
    "D4",
    "B3"
  ],
  [
    "F#3"
  ],
  [
    "C#4",
    "A3"
  ],
  [
    "C#4",
    "A3"
  ],
  [
    "E5"
  ],
  [
    "B5",
    "F#3"
  ],
  [
    "A3",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "B5"
  ],
  [
    "A5",
    "F#3"
  ],
  [
    "A3",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "F#3"
  ],
  [
    "A3",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B4"
  ],
  [
    "A5",
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "F#5",
    "B3",
    "G3"
  ],
  [
    "A3"
  ],
  [
    "C#4",
    "E4"
  ],
  [
    "C#4"
  ],
  [
    "E5"
  ],
  [
    "C#4",
    "E4"
  ],
  [
    "E5",
    "A3"
  ],
  [
    "D5"
  ],
  [
    "C#4"
  ],
  [
    "F#5"
  ],
  [
    "A#3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "C#5"
  ],
  [
    "E5",
    "A#3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "B3"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "E5"
  ],
  [
    "A3"
  ],
  [
    "D5",
    "E4",
    "C#4"
  ],
  [
    "C#5",
    "A4",
    "E4"
  ],
  [
    "D5"
  ],
  [
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "A4"
  ],
  [
    "A5",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "F#5",
    "D4",
    "B3"
  ],
  [
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "E5"
  ],
  [
    "D5"
  ],
  [
    "C#5",
    "G3"
  ],
  [
    "D4",
    "B3"
  ],
  [
    "D5",
    "D4",
    "B3"
  ],
  [
    "F#3"
  ],
  [
    "C#4",
    "A3"
  ],
  [
    "C#4",
    "A3"
  ],
  [
    "E5"
  ],
  [
    "B5",
    "F#3"
  ],
  [
    "A3",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "B5"
  ],
  [
    "A5",
    "F#3"
  ],
  [
    "A3",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "F#3"
  ],
  [
    "A3",
    "C#4"
  ],
  [
    "A3"
  ],
  [
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "B4"
  ],
  [
    "A5",
    "E3"
  ],
  [
    "B3",
    "G3"
  ],
  [
    "F#5",
    "B3",
    "G3"
  ],
  [
    "A3"
  ],
  [
    "C#4",
    "E4"
  ],
  [
    "C#4"
  ],
  [
    "E5"
  ],
  [
    "C#4",
    "E4"
  ],
  [
    "E5",
    "A3"
  ],
  [
    "D5"
  ],
  [
    "C#4"
  ],
  [
    "F#5"
  ],
  [
    "A#3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "C#5"
  ],
  [
    "E5",
    "A#3"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "E4",
    "C#4"
  ],
  [
    "B3"
  ],
  [
    "F#4",
    "D4"
  ],
  [
    "A4",
    "F#4"
  ],
  [
    "E5"
  ],
  [
    "A3"
  ],
  [
    "D5",
    "E4",
    "C#4"
  ],
  [
    "C#5",
    "A4",
    "E4"
  ],
  [
    "D5"
  ],
  [
    "A4",
    "D3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "G#3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "G3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "G4"
  ],
  [
    "F#4",
    "D3"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "A3"
  ],
  [
    "A4",
    "D3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "G#3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "G3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "G4"
  ],
  [
    "F#4",
    "D3"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "A4",
    "G3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "A3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "F#4"
  ],
  [
    "E4"
  ],
  [
    "D4",
    "A3"
  ]
]

var song2info = [
  [
    "E5",
    "F4"
  ],
  [
    "A5",
    "C5",
    "F3"
  ],
  [
    "E5"
  ],
  [
    "D5",
    "F4"
  ],
  [
    "F3"
  ],
  [
    "G#5",
    "C5"
  ],
  [
    "F4"
  ],
  [
    "D5"
  ],
  [
    "G5",
    "E4"
  ],
  [
    "B4"
  ],
  [
    "E3"
  ],
  [
    "D5"
  ],
  [
    "E3"
  ],
  [
    "E4",
    "A3"
  ],
  [
    "G5"
  ],
  [
    "C5"
  ],
  [
    "E5",
    "D4"
  ],
  [
    "C5"
  ],
  [
    "D4",
    "A5"
  ],
  [
    "E5"
  ],
  [
    "G3"
  ],
  [
    "F4",
    "G3"
  ],
  [
    "B4",
    "G3"
  ],
  [
    "E5",
    "G3"
  ],
  [
    "E5",
    "G3",
    "C3",
    "C5",
    "C4"
  ],
  [
    "B4",
    "C4"
  ],
  [
    "D5"
  ],
  [
    "G5",
    "A#4",
    "C4"
  ],
  [
    "E5"
  ],
  [
    "F4"
  ],
  [
    "A5"
  ],
  [
    "C5",
    "F4",
    "F3"
  ],
  [
    "F4"
  ],
  [
    "D5",
    "C5"
  ],
  [
    "F3"
  ],
  [
    "C5",
    "G#5",
    "F4"
  ],
  [
    "F4"
  ],
  [
    "F3"
  ],
  [
    "G5",
    "E4"
  ],
  [
    "B4"
  ],
  [
    "E3"
  ],
  [
    "D5"
  ],
  [
    "E3"
  ],
  [
    "G5",
    "E4",
    "A3"
  ],
  [
    "D5"
  ],
  [
    "E5",
    "B4",
    "A3"
  ],
  [
    "E5"
  ],
  [
    "E5",
    "D4"
  ],
  [
    "C5",
    "D4"
  ],
  [
    "D4"
  ],
  [
    "G3"
  ],
  [
    "F4"
  ],
  [
    "B4",
    "G3"
  ],
  [
    "D4"
  ],
  [
    "E5"
  ],
  [
    "F4"
  ],
  [
    "G3"
  ],
  [
    "E5",
    "C5",
    "C4",
    "C3"
  ],
  [
    "C5",
    "C4"
  ],
  [
    "B4"
  ],
  [
    "D5"
  ],
  [
    "G5",
    "A#4",
    "C4"
  ],
  [
    "E5",
    "F4"
  ],
  [
    "A5",
    "C5",
    "F4"
  ],
  [
    "F3"
  ],
  [
    "F4",
    "D5",
    "C5"
  ],
  [
    "F3"
  ],
  [
    "G#5",
    "C5",
    "F4"
  ],
  [
    "F4"
  ],
  [
    "F3"
  ],
  [
    "D5"
  ],
  [
    "G5",
    "E4"
  ],
  [
    "B4"
  ],
  [
    "E3"
  ],
  [
    "D5"
  ],
  [
    "E3"
  ],
  [
    "E4",
    "G5",
    "A3"
  ],
  [
    "B4"
  ],
  [
    "D5"
  ],
  [
    "C5",
    "A3"
  ],
  [
    "E5",
    "D4"
  ],
  [
    "C5"
  ],
  [
    "D4"
  ],
  [
    "G3",
    "D4"
  ],
  [
    "E5",
    "B4",
    "F4"
  ],
  [
    "G4"
  ],
  [
    "B4"
  ],
  [
    "G3",
    "C5",
    "G4",
    "C4"
  ],
  [
    "E5"
  ],
  [
    "B4"
  ],
  [
    "G5"
  ],
  [
    "B4",
    "C4"
  ],
  [
    "D4"
  ],
  [
    "C4"
  ],
  [
    "D4"
  ],
  [
    "C4",
    "F3"
  ],
  [
    "E4"
  ],
  [
    "C3"
  ],
  [
    "E5",
    "A4",
    "E4",
    "C4",
    "F3"
  ],
  [
    "C5"
  ],
  [
    "F3",
    "G#4"
  ],
  [
    "D4"
  ],
  [
    "D5",
    "D4",
    "C4"
  ],
  [
    "F3"
  ],
  [
    "B3"
  ],
  [
    "C4"
  ],
  [
    "G4",
    "E4"
  ],
  [
    "E3"
  ],
  [
    "D4"
  ],
  [
    "B3"
  ],
  [
    "D5",
    "D4"
  ],
  [
    "B3"
  ],
  [
    "E4"
  ],
  [
    "C4"
  ],
  [
    "D4"
  ],
  [
    "E4",
    "D3"
  ],
  [
    "A4",
    "D3"
  ],
  [
    "C5",
    "D3"
  ],
  [
    "D4",
    "D3"
  ],
  [
    "F4"
  ],
  [
    "B4"
  ],
  [
    "E5"
  ],
  [
    "B4"
  ],
  [
    "B4",
    "C3"
  ],
  [
    "B3"
  ],
  [
    "D4"
  ],
  [
    "E5",
    "C3"
  ],
  [
    "A#4",
    "D4",
    "C3"
  ],
  [
    "D4",
    "D5"
  ],
  [
    "A#4"
  ],
  [
    "E4"
  ],
  [
    "F4",
    "C4",
    "F3"
  ],
  [
    "A4"
  ],
  [
    "E5",
    "A4",
    "F3"
  ],
  [
    "C5",
    "F4",
    "F3",
    "G#4"
  ],
  [
    "D5",
    "G#4",
    "C4",
    "F3"
  ],
  [
    "D4"
  ],
  [
    "E4"
  ],
  [
    "G4",
    "E4",
    "E3"
  ],
  [
    "G5",
    "B3"
  ],
  [
    "D5",
    "G3"
  ],
  [
    "B3"
  ],
  [
    "E4"
  ],
  [
    "C5"
  ],
  [
    "D4"
  ],
  [
    "D3",
    "E4"
  ],
  [
    "A4"
  ],
  [
    "A4",
    "D3"
  ],
  [
    "A5"
  ],
  [
    "C5",
    "D3"
  ],
  [
    "D3"
  ],
  [
    "D4"
  ],
  [
    "F4"
  ],
  [
    "B4"
  ],
  [
    "E5"
  ],
  [
    "B4"
  ],
  [
    "B4",
    "C4",
    "C3"
  ],
  [
    "E4"
  ],
  [
    "D4"
  ],
  [
    "E5",
    "E4"
  ],
  [
    "A#4",
    "D4",
    "C3",
    "E4"
  ],
  [
    "D4",
    "D5"
  ],
  [
    "A#4"
  ],
  [
    "C4",
    "F3"
  ],
  [
    "E5",
    "A4"
  ],
  [
    "C4",
    "F3"
  ],
  [
    "F4",
    "C5"
  ],
  [
    "G#4",
    "F3"
  ],
  [
    "A5"
  ],
  [
    "D5",
    "C4",
    "F3"
  ],
  [
    "G#4"
  ],
  [
    "G#4"
  ],
  [
    "G4",
    "E4"
  ],
  [
    "E3"
  ],
  [
    "B3"
  ],
  [
    "D5",
    "G3"
  ],
  [
    "B3"
  ],
  [
    "E4"
  ],
  [
    "C5"
  ],
  [
    "E4"
  ],
  [
    "E4",
    "D3"
  ],
  [
    "C5",
    "A4"
  ],
  [
    "E4",
    "D3"
  ],
  [
    "B4",
    "F4",
    "D3"
  ],
  [
    "A4"
  ],
  [
    "B4"
  ],
  [
    "G3",
    "B4",
    "C3"
  ],
  [
    "C3"
  ],
  [
    "A#4",
    "D4",
    "C3"
  ],
  [
    "C3"
  ],
  [
    "F4",
    "C3"
  ],
  [
    "C5",
    "F4"
  ],
  [
    "G#5",
    "F4"
  ],
  [
    "C5"
  ],
  [
    "F4"
  ],
  [
    "C5"
  ],
  [
    "E4"
  ],
  [
    "B4"
  ],
  [
    "E4"
  ],
  [
    "G5"
  ],
  [
    "B4"
  ],
  [
    "E4"
  ],
  [
    "A4"
  ],
  [
    "E5"
  ],
  [
    "A4"
  ],
  [
    "D4"
  ],
  [
    "C5"
  ],
  [
    "F5"
  ],
  [
    "A5"
  ],
  [
    "F5"
  ],
  [
    "G4"
  ],
  [
    "C5",
    "G4"
  ],
  [
    "G#5",
    "F5"
  ],
  [
    "G4"
  ],
  [
    "C5"
  ],
  [
    "F5"
  ],
  [
    "C4"
  ],
  [
    "D5"
  ],
  [
    "C4"
  ],
  [
    "C4"
  ],
  [
    "C4"
  ],
  [
    "C4"
  ],
  [
    "D#3"
  ],
  [
    "C4"
  ],
  [
    "C4"
  ]
]
   



function nukeDisplay(){
  document.querySelectorAll(".test-note").forEach(el => el.remove());
}

const ezPlay = document.getElementById("ezplay");
ezPlay.addEventListener('click', () => skip());

function skip(){
    const notes = [];

    for (i=0; i<activeSongInfoArray[currentNoteIndex].length;i++){
        notes.push(activeSongInfoArray[currentNoteIndex][i]);
    }

    for (let i = 0; i < notes.length; i++) {
        if (notes[i] === "A3") {
            playNote("A3", "A3", A3);
        } else if (notes[i] === "A4") {
            playNote("A4", "A4", A4);
        } else if (notes[i] === "A5") {
            playNote("A5", "A5", A5);
        } else if (notes[i] === "B3") {
            playNote("B3", "B3", B3);
        } else if (notes[i] === "B4") {
            playNote("B4", "B4", B4);
        } else if (notes[i] === "B5") {
            playNote("B5", "B5", B5);
        } else if (notes[i] === "C3") {
            playNote("C3", "C3", C3);
        } else if (notes[i] === "C4") {
            playNote("C4", "C4", C4);
        } else if (notes[i] === "C5") {
            playNote("C5", "C5", C5);
        } else if (notes[i] === "D3") {
            playNote("D3", "D3", D3);
        } else if (notes[i] === "D4") {
            playNote("D4", "D4", D4);
        } else if (notes[i] === "D5") {
            playNote("D5", "D5", D5);
        } else if (notes[i] === "E3") {
            playNote("E3", "E3", E3);
        } else if (notes[i] === "E4") {
            playNote("E4", "E4", E4);
        } else if (notes[i] === "E5") {
            playNote("E5", "E5", E5);
        } else if (notes[i] === "F3") {
            playNote("F3", "F3", F3);
        } else if (notes[i] === "F4") {
            playNote("F4", "F4", F4);
        } else if (notes[i] === "F5") {
            playNote("F5", "F5", F5);
        } else if (notes[i] === "G3") {
            playNote("G3", "G3", G3);
        } else if (notes[i] === "G4") {
            playNote("G4", "G4", G4);
        } else if (notes[i] === "G5") {
            playNote("G5", "G5", G5);
        } else if (notes[i] === "A#3") {
            playNote("Asharp3", "A#3", Asharp3);
        } else if (notes[i] === "A#4") {
            playNote("Asharp4", "A#4", Asharp4);
        } else if (notes[i] === "A#5") {
            playNote("Asharp5", "A#5", Asharp5);
        } else if (notes[i] === "F#3") {
            playNote("Fsharp3", "F#3", Fsharp3);
        } else if (notes[i] === "F#4") {
            playNote("Fsharp4", "F#4", Fsharp4);
        } else if (notes[i] === "F#5") {
            playNote("Fsharp5", "F#5", Fsharp5);
        } else if (notes[i] === "C#3") {
            playNote("Csharp3", "C#3", Csharp3);
        } else if (notes[i] === "C#4") {
            playNote("Csharp4", "C#4", Csharp4);
        } else if (notes[i] === "C#5") {
            playNote("Csharp5", "C#5", Csharp5);
        } else if (notes[i] === "D#3") {
            playNote("Dsharp3", "D#3", Dsharp3);
        } else if (notes[i] === "D#4") {
            playNote("Dsharp4", "D#4", Dsharp4);
        } else if (notes[i] === "D#5") {
            playNote("Dsharp5", "D#5", Dsharp5);
        } else if (notes[i] === "G#3") {
            playNote("Gsharp3", "G#3", Gsharp3);
        } else if (notes[i] === "G#4") {
            playNote("Gsharp4", "G#4", Gsharp4);
        } else if (notes[i] === "G#5") {
            playNote("Gsharp5", "G#5", Gsharp5);
        }
    }   

    nukeDisplay();
    currentNoteIndex++;
    displayEnd++;
    makeNotes();
    moveNotes();
}

const blue = document.getElementById("blue");
const pink = document.getElementById("pink");
const green = document.getElementById("green");
const purple = document.getElementById("purple");


blue.addEventListener('click', () => makeBlue());
pink.addEventListener('click', () => makePink());
green.addEventListener('click', () => makeGreen());
purple.addEventListener('click', () => makePurple());

function makeBlue(){
    document.getElementById("header-bar").style.backgroundColor = "#98d5f7";
    document.getElementById("header-bar").style.color = "#5B7C99";
    document.getElementById("misc").style.backgroundColor = "aliceblue";
    document.getElementById("misc").style.border = "solid 2px rgb(71, 71, 216)";
    document.getElementById("song-select").style.backgroundColor = "rgb(248, 244, 237)";
    document.getElementById("song-select").style.border = "solid 2px rgb(82, 82, 226)";
    document.getElementById("song-select").style.scrollbarColor = "slategrey azure";

    const songs = document.getElementsByClassName("song");
    for (let i = 0; i < songs.length; i++) {
        songs[i].style.backgroundColor = "rgb(104, 180, 231)";
        songs[i].style.color = "white";
        songs[i].style.border = "solid 2px slategrey";
    }
    document.getElementById("now-playing").style.backgroundColor = "#cbe1ee";
    document.getElementById("now-playing").style.color = "grey";
    document.getElementById("now-playing").style.border = "solid 2px slategrey";
    document.getElementById("ezplay").style.backgroundColor = "rgba(57, 101, 246, 0.312)";
    document.getElementById("ezplay").style.color = "white";
    document.getElementById("reset").style.backgroundColor = "rgba(246, 57, 92, 0.312)";
    document.getElementById("reset").style.color = "white";
    // const testNotes = document.getElementsByClassName("test-note");

    // for (let i = 0; i < testNotes.length; i++) {
    //     testNotes[i].style.backgroundColor = "rgb(47, 85, 190)";
    //     testNotes[i].style.border = "solid 1px grey"; 
    // }

    const keyHints = document.getElementsByClassName("keyhint");
    for (let i = 0; i < keyHints.length; i++) {
        keyHints[i].style.color = "rgb(136, 136, 237)";
    }

}

function makePink(){
    document.getElementById("header-bar").style.backgroundColor = "#f0a2dd";
    document.getElementById("header-bar").style.color = "#dd3eb5";
    document.getElementById("misc").style.backgroundColor = "rgb(255, 204, 229)";
    document.getElementById("misc").style.border = "solid 2px rgb(96, 5, 55)"; 
    document.getElementById("song-select").style.backgroundColor = "rgb(247, 237, 248)";
    document.getElementById("song-select").style.border = "solid 2px rgba(106, 5, 66, 0.78)";
    document.getElementById("song-select").style.scrollbarColor = "pink azure";
    const songs = document.getElementsByClassName("song");
    for (let i = 0; i < songs.length; i++) {
        songs[i].style.backgroundColor = "rgba(240, 147, 195, 0.91)";
        songs[i].style.color = "white";
        songs[i].style.border = "solid 2px rgba(106, 5, 66, 0.78)";
    }
    document.getElementById("now-playing").style.backgroundColor = "rgb(241, 187, 213)";
    document.getElementById("now-playing").style.color = "white";
    document.getElementById("now-playing").style.border = "solid 2px rgba(177, 7, 109, 0.78)";
    document.getElementById("ezplay").style.backgroundColor = "rgba(57, 101, 246, 0.312)";
    document.getElementById("ezplay").style.color = "white";
    document.getElementById("reset").style.backgroundColor = "rgba(246, 57, 92, 0.312)";
    document.getElementById("reset").style.color = "white";
    

    const keyHints = document.getElementsByClassName("keyhint");
    for (let i = 0; i < keyHints.length; i++) {
        keyHints[i].style.color = "rgb(237, 136, 208)";
    }
}

function makeGreen(){
    document.getElementById("header-bar").style.backgroundColor = "#93C393";
    document.getElementById("header-bar").style.color = "darkslategrey";
    document.getElementById("misc").style.backgroundColor = "rgb(222, 243, 212)";
    document.getElementById("misc").style.border = "solid 2px rgb(5, 96, 60)"; 
    document.getElementById("song-select").style.backgroundColor = "rgb(237, 248, 238)";
    document.getElementById("song-select").style.border = "solid 2px rgba(5, 106, 37, 0.78)";
    document.getElementById("song-select").style.scrollbarColor = "green azure";
    const songs = document.getElementsByClassName("song");
    for (let i = 0; i < songs.length; i++) {
        songs[i].style.backgroundColor = "rgba(128, 226, 134, 0.79)";
        songs[i].style.color = "white";
        songs[i].style.border = "solid 2px rgba(5, 106, 37, 0.78)";
    }
    document.getElementById("now-playing").style.backgroundColor = "rgb(187, 241, 200)";
    document.getElementById("now-playing").style.color = "white";
    document.getElementById("now-playing").style.border = "solid 2px rgba(5, 106, 37, 0.78)";
    document.getElementById("ezplay").style.backgroundColor = "rgba(57, 101, 246, 0.312)";
    document.getElementById("ezplay").style.color = "white";
    document.getElementById("reset").style.backgroundColor = "rgba(246, 57, 92, 0.312)";
    document.getElementById("reset").style.color = "white";

    const keyHints = document.getElementsByClassName("keyhint");
    for (let i = 0; i < keyHints.length; i++) {
        keyHints[i].style.color = "rgb(136, 237, 138)";
    }

}

function makePurple(){
    document.getElementById("header-bar").style.backgroundColor = "rgb(236, 161, 240)";
    document.getElementById("header-bar").style.color = "rgb(131, 11, 111)";
    document.getElementById("misc").style.backgroundColor = "rgb(236, 212, 243)";
    document.getElementById("misc").style.border = "solid 2px rgb(96, 5, 94)"; 
    document.getElementById("song-select").style.backgroundColor = "rgb(248, 237, 248)";
    document.getElementById("song-select").style.border = "solid 2px rgba(103, 5, 106, 0.78)";
    document.getElementById("song-select").style.scrollbarColor = "purple azure";
    const songs = document.getElementsByClassName("song");
    for (let i = 0; i < songs.length; i++) {
        songs[i].style.backgroundColor = "rgba(228, 166, 233, 0.79)";
        songs[i].style.color = "white";
        songs[i].style.border = "solid 2px rgba(98, 5, 106, 0.78)";
    }
    document.getElementById("now-playing").style.backgroundColor = "rgb(232, 187, 241)";
    document.getElementById("now-playing").style.color = "white";
    document.getElementById("now-playing").style.border = "solid 2px rgba(94, 5, 106, 0.78)";
    document.getElementById("ezplay").style.backgroundColor = "rgba(57, 101, 246, 0.312)";
    document.getElementById("ezplay").style.color = "white";
    document.getElementById("reset").style.backgroundColor = "rgba(246, 57, 92, 0.312)";
    document.getElementById("reset").style.color = "white";
    const keyHints = document.getElementsByClassName("keyhint");
        for (let i = 0; i < keyHints.length; i++) {
            keyHints[i].style.color = "rgb(217, 136, 237)";
        }
}