// BEGIN CUSTOM JAVASCRIPT/jQuery HERE

// function notePush() {
//   event.preventDefault();
//
//   // Set empty notes array
//   var notes = [];
//   // Get value from text input
//   var note = document.getElementById('note-content').value;
//   // Push most recent note into notes array
//   notes.push(note);
//   // Submit note to LocalStorage
//   localStorage.setItem('notes', JSON.stringify(notes));
//
// };

$(function notePush(event) {
  if ('localStorage' in window && window['localStorage'] !== null) {
    //Get value from text input
    var note = JSON.stringify({ text : $("#note-content").val() }),

    //Parse the notes, create an array so I can create multiple notes
    notes = localStorage.getItem('note');

    notes = notes ? JSON.parse(notes) : [];

    notes.push(note);

    localStorage.setItem("note", JSON.stringify(notes));
    console.log("The data was saved.");
    } else {
        alert('Cannot store user preferences as your browser do not support local storage');
    }
});
