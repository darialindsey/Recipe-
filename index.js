//FEATURE 1: click ingredient to cross it off, strikethrough
//used curriculum resources and as last resort Nu html checker while learning to manipulate notes features to see specific lines bug issues e.g. missing closing syntax on line on line 66
//==============================================================
const ingredientItems = document.querySelectorAll('.col-md-6 ul li');
ingredientItems.forEach(function(item) {
    //adding hand cursor on hover
    item.style.cursor = 'pointer';

    item.addEventListener('click', function() {
        //bootstrap strikethrough
        item.classList.toggle('text-decoration-line-through');
        item.classList.toggle('text-muted');
    });
});
//=============================================================
//FEATURE 2 meaningful interaction notes box. users can put notes
//directly into the page. I 
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesList = document.getElementById('notesList');

if(addNoteBtn) {
    addNoteBtn.addEventListener('click', function() {
        const noteText = noteInput.value.trim();

        if (noteText !== '') {
            //create new list element
            const newNote = document.createElement('li');
            //setting text content of notes box
            newNote.textContent = noteText;
            newNote.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
            //ability to remove notes from notes box
            newNote.addEventListener('click', function() {
                newNote.remove();
            });
            //append child element to parent
            notesList.appendChild(newNote);
            //clear input field
            noteInput.value = '';
             }   
         });
        }