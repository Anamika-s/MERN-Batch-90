let movieItems;
let favItems;

const getMovies = () => {
    return fetch("http://localhost:3000/movies").then((result) => {
        if (result.status == 200) {
            return Promise.resolve(result.json());
        } else {
            return Promise.reject("Unable to retrieve the movie list");
        }
    }).then(resultMovie => {
        movieItems = resultMovie;
        createMovieList();
        return movieItems;
    }).catch(error => {
        throw new Error(error);
    })
}

const postMovie = (myMovie) => {
    return fetch("http://localhost:3000/favourites", {
        method: 'POST',
        body: JSON.stringify(myMovie),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then((result) => {
        if (result.status == 201) {
            return Promise.resolve(favItems);
        } else {
            return Promise.reject("Movie is already added to favourites");
        }
    })
}

 
function addFavourite(id) {
    if (!isMoviePresentInFavItems(id)) {
        let movieObject = getMovieById(id)
        favItems.push(movieObject);
        //Add Favourite call
        return fetch("http://localhost:3000/favourites", {
            method: 'POST',
            body: JSON.stringify(movieObject),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            if (result.status == 200 || result.status == 201) {
                return Promise.resolve(favItems);
            } else {
                return Promise.reject("Movie is already added to favourites");
            }
        }).then((favMovieResult) => {
            createFavouriteList();
            return favMovieResult;
        }).catch(err => {
            throw new Error(err);
        })

    } else {
        throw new Error("Movie is already added to favourites");
    }

}

function isMoviePresentInFavItems(selectedMovieId) {
    for (let favmovie in favItems) {
        if (selectedMovieId == favItems[favmovie].id) {
            return true;
        }
    }
    return false;
}

function getMovieById(id) {
    for (let movie in movieItems) {
        if (id == movieItems[movie].id) {
            return movieItems[movie];
        }
    }
}

const createMovieList = () => {
    let domMovieList = '';
    movieItems.forEach(element => {
        domMovieList = domMovieList + `
        <div id="${element.id}" class="list-group-item d-flex flex-column align-items-center">
        <h6>${element.title}</h6>
        <img src="${element.posterPath}" class="img-fluid pb-2" alt="Responsive image">
        <p>Year: <span id="year">${element.releaseDate}</span></p>
        <button
        onclick="addFavourite(${element.id})" type="button" class="btn btn-primary">
        Add to Favourites
        </button>
        </div>
        `;
    });
    document.getElementById("moviesList").innerHTML = domMovieList;
}

const createFavouriteList = () => {
    let domFavouriteList = '';
    let childNode = document.getElementById("favouritesList");
    childNode.innerHTML = '';
    favItems.forEach(element => {
        domFavouriteList = domFavouriteList + `
        <div id="${element.id}" class="list-group-item d-flex flex-column align-items-center">
        <h6>${element.title}</h6>
        <img src="${element.posterPath}" class="img-fluid pb-2" alt="Responsive image">
        <p>Year: <span id="year">${element.releaseDate}</span></p>
        </div>
        `;
    });
    childNode.innerHTML = domFavouriteList;
}

module.exports = {
    getMovies,
    getFavourites,
    addFavourite
};
