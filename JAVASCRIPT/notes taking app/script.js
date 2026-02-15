let notes = JSON.parse(localStorage.getItem("notes")) || [];

const ninp = document.getElementById("noteInput");
const addbtn = document.getElementById("AddNoteBtn");
const notescont = document.getElementById("notesContainer");

function renderNotes() {
    notescont.innerHTML = "";

    notes.forEach((note, index) => {
        let newNote = document.createElement("div");
        let noteText = document.createElement("p");
        let editBtn = document.createElement("button");
        let delBtn = document.createElement("button");

        noteText.innerText = note;
        editBtn.innerText = "Edit";
        delBtn.innerText = "Delete";

        editBtn.addEventListener("click", function () {
            let updatedText = prompt("Edit your note:", notes[index]);
            if (updatedText !== null && updatedText.trim() !== "") {
                notes[index] = updatedText;
                localStorage.setItem("notes", JSON.stringify(notes));
                renderNotes();
            }
        });

        delBtn.addEventListener("click", function () {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        });

        newNote.appendChild(noteText);
        newNote.appendChild(editBtn);
        newNote.appendChild(delBtn);
        notescont.appendChild(newNote);
    });
}

addbtn.addEventListener("click", function () {
    if (ninp.value.trim() === "") {
        alert("Enter any note");
        return;
    }

    notes.push(ninp.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    ninp.value = "";
    renderNotes();
});

renderNotes();
