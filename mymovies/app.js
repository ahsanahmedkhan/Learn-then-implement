//query Selector
const movieForm = document.querySelector('#movie-form');
const movieContainer = document.querySelector('#movie-container');

let listItems = [];

//funcations
function handleFormSubmit(e){
    e.preventDefault();
    const moviename = movieForm.querySelector('#moviename').value;
    const year = movieForm.querySelector('#year').value;
    const note = movieForm.querySelector('#note').value;

    const newmovie = {
        moviename,
        year,
        note,
        id: Date.now()
    }

    console.log(newmovie);


}


//events listeners

movieForm.addEventListener('submit', handleFormSubmit);