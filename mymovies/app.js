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
    listItems.push(newmovie);
    e.target.reset();
    displayMovies();
    console.log(displayMovies);
}

function displayMovies(){
    const tempString = listItems.map(item => `
        <div class="col">
            <divclass="card md-4 rounded-3 shadow-sm border-success">
                <div class="card-header py-3 text-white bg-success border-success">
                    <h4 class="my-0">${item.moviename}</h4>
                </div>
                <div class="card-body">
                    <ul class="text-start">
                        <li><strong>Year :</strong>${item.moviename}</li>
                        <li><strong>Year :</strong>${item.year}</li>
                        ${!item.note.length ? "" : `<li><strong>Year :</strong>${item.note}</li>`}
                    </ul>
                    <button class="btn btn-lg btn-outline-danger" aria-label="Delete ${item.moviename}" value="${item.id}"></button>
                </div>
            </div>

        </div>
    `).join('');
    console.log(tempString);
    
}
console.log("worked");

//events listeners

movieForm.addEventListener('submit', handleFormSubmit);