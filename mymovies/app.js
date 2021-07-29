//query Selector

const movieForm = document.querySelector('#movie-form');
const movieContainer = document.querySelector('#movie-container');

let listItems = [];

//funcations

function handleFormSubmit(e){
    e.preventDefault();
    const moviename = DOMPurify.sanitize(movieForm.querySelector('#moviename').value);
    const year = DOMPurify.sanitize(movieForm.querySelector('#year').value);
    const note = DOMPurify.sanitize(movieForm.querySelector('#note').value);

    const newmovie = {
        moviename,
        year,
        note,
        id: Date.now()
    }

    listItems.push(newmovie);
    e.target.reset();
    movieContainer.dispatchEvent(new CustomEvent('refreshMovies'));
    
}

function displayMovies(){
    const tempString = listItems.map(item => `
        <div class="col mr-3 mb-2">
            <div class="card md-4 rounded-3 shadow-sm border-success">
                <div class="card-header py-3 text-white bg-success border-success">
                    <h4 class="my-0">${item.moviename}</h4>
                </div>
                <div class="card-body">
                    <ul class="text-start" style="list-style:none;">
                        <li><strong>ID : </strong>${item.id}</li>
                        <li><strong>Name : </strong>${item.moviename}</li>
                        <li><strong>Year : </strong>${item.year}</li>
                        ${!item.note.length ? "" : `<li><strong>Note : </strong>${item.note}</li>`}
                    </ul>
             <button class="btn btn-outline-success" aria-label="Delete ${item.moviename}" 
             value="${item.id}">Delete Movie</button>
                </div>
            </div>
        </div>
        
    `).join('');

    movieContainer.innerHTML = tempString;
    // console.log(tempString);
}

function mirrorStatetoLocalStorage(){
    localStorage.setItem('movieContainer.list', JSON.stringify(listItems));
}

function loadinitialUI(){
    const tempLocalStorage = localStorage.getItem('movieContainer.list');
    if(tempLocalStorage === null || tempLocalStorage === []) return;
    const tempMovies = JSON.parse(tempLocalStorage);
    listItems.push(...tempMovies);
    movieContainer.dispatchEvent(new CustomEvent('refreshMovies'));
}

function deleteMovieFromList(id){
    listItems = listItems.filter(item => item.id !== id);
    movieContainer.dispatchEvent(new CustomEvent('refreshMovies'));
}


//events listeners

movieForm.addEventListener('submit', handleFormSubmit);
movieContainer.addEventListener('refreshMovies',displayMovies);
movieContainer.addEventListener('refreshMovies',mirrorStatetoLocalStorage);
window.addEventListener('DOMContentLoaded', loadinitialUI);
movieContainer.addEventListener('click', (e) =>{
    if(e.target.matches('.btn-outline-success')){
        deleteMovieFromList(Number(e.target.value));
    };
});