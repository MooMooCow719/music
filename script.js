const horizLines = 12;
let measures = 4;
let notesPerMeasure = 4;

function makeGrid(){
    let board = document.getElementById('main-board');
    board.innerHTML = '';

    for(let i=0; i<measures; i++){
        let measure = document.createElement('div');
        measure.className = "measure";
        for(let j=0; j<notesPerMeasure; i++){
            let noteDiv = document.createElement('div');
            noteDiv.className = "note-div";
            noteDiv.style.left = `${(j/notesPerMeasure) * 100}%`;
            measure.appendChild(noteDiv);
        }
        board.appendChild(measure);
    }
}

makeGrid();


