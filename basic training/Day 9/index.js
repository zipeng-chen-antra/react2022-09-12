const getArtistAPI = (artistName) =>
  `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`;

const searchForm = document.querySelector(".search-form");
const inputField = document.querySelector(".search-form__input");
const albumContainer = document.querySelector(".albums-container");
const searchResult = document.querySelector(".search-result");


class State {
    constructor(){
        this._albums = []
    }

    get albums(){
        return this._albums;
    }

    set albums(albums){
        this._albums = albums;
    }
}

const state = new State();





function renderSearchResult(albums,artistName){
    searchResult.innerHTML = `<div>
        Found ${albums.length} results from ${artistName}
    </div>`
}

function renderAlbums(albums) {
  const albumsInnerHTML = albums
    .map((album) => {
      return `<article class="album">
        <img class="album__thumbnail" src=${album.artworkUrl100}/>
        <div class="album__title">${album.collectionName}</div>
        <div class="album__price">${album.collectionPrice}</div>
        <div class="album__release">${album.releaseDate.substring(0,10)}</div>
        <button onclick="handleDelete(${album.collectionId})">Delete</button>
    </article>`;
    })
    .join("");

  albumContainer.innerHTML = albumsInnerHTML;
}

function setUpSearchEvent() {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const artistName = inputField.value;
    fetch(getArtistAPI(artistName))
      .then((res) => res.json())
      .then((data) => {
        state.albums = data.results;

        console.log(data.results)
        renderAlbums(state.albums);
        renderSearchResult(state.albums,artistName);
      });
  });
}

function handleDelete(id){
    const temp = [...state.albums].filter(album=>album.collectionId!==id);
    state.albums = temp;
    renderAlbums(state.albums);
}

//initiate our app
(()=>{
    setUpSearchEvent()
})()


