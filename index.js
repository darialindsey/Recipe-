//FEATURE 1: click ingredient to cross it off, strikethrough
//used online + curriculum resources while learning to manipulate elements 
//piece
const ingredientItems = document.querySelectorAll('.col-md-6 ul li');
ingredientItems.forEach(function(item) {
    //adding hand cursor on hover
    item,style.cursor = 'pointer';

    item.addEventListener('click', function() {
        //bootstrap strikethrough
        item.classList.toggle('text-decoration-line-through');
        item.classList.toggle(text-muted');
    });
});