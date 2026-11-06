//FEATURE 1: click ingredient to cross it off, strikethrough
//used online + curriculum resources while learning to manipulate notes feature 
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
//directly into the page
const noteInput = document.getElementById('')
const addNoteBtn = document.getElementById('')
const notesList = document.getElementById('notesList')

if(addNoteBtn) {
    addNoteBtn.addEventListener('click', function() {
        const noteText = noteInput.value.trim();

        if (noteText !== '') {
            //create new list element
            const newNote = document.createElement('li');
            //setting text content of notes box
            newNote.textContent =noteText;
            newNote.className ='list-group-item list-group-item-action d-flex justify-content-between align-items-center';
            //ability to remove notes from notes box
            newNote.addEventListener('click', function() {
                newNote.remove();
            });
            //append child element to parent
            notesList.appendchild(newNote);
            //clear input field
            noteInput.value = '';
        }

            
    });
}