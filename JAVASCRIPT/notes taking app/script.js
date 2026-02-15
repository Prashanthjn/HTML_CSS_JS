let notes=[];
ninp = document.getElementById("noteInput");
addbtn = document.getElementById("AddNoteBtn");
notescont = document.getElementById("notesContainer");
addbtn.addEventListener("click", function(){
   

    if (ninp.value.trim() === "") {
        alert("enter any note");
        return;
    }
    let newNote = document.createElement("div");
    let noteText = document.createElement("p");
    let delBtn = document.createElement("button");
    noteText.innerText = ninp.value;
    
    notes.push(ninp.value);
    localStorage.setItem("notes",JSON.stringify(notes));
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", function(){
        newNote.remove();
    });

    newNote.appendChild(noteText);
    newNote.appendChild(delBtn);

    notescont.appendChild(newNote);

    ninp.value = "";

});
