const root = document.querySelector("#root");

let search = 'top';

let url = `http://www.omdbapi.com/?s=${search}&apikey=b1a126bc`;

function requestUserInput(e) {
  e.preventDefault();
  search = document.forms[0][0].value;
  if (search) {
    console.log(search);
    let url = `http://www.omdbapi.com/?s=${search}&apikey=b1a126bc`;
    getData(url);
  }
}

function renderSearchForm() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "text";
  const button = document.createElement("button");
  button.innerText = "Search";
  button.addEventListener("click", requestUserInput);
  form.appendChild(input);
  form.appendChild(button);
  root.appendChild(form);
  const blockForMovies = document.createElement("div");
  blockForMovies.classList.add("block-for-movies");
  root.appendChild(blockForMovies);
}

function renderData(movie) {
  let movieBlock = document.createElement("div");
  movieBlock.classList.add('movie-block');
  let image = document.createElement("img");
  image.src = movie.Poster;
  movieBlock.appendChild(image);
  let name = document.createElement('span');
  name.innerText = movie.Title;
  movieBlock.appendChild(name);
  const d = document.querySelector(".block-for-movies");
  d.appendChild(movieBlock);
  console.log(movie);
}

function getData(url) {
  const block = document.querySelector('.block-for-movies');
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }
  fetch(url)
    .then(data => data.json())
    .then(data => data.Search.forEach(movie => renderData(movie)))
    .catch(error => console.log(error));
}

renderSearchForm();
getData(url);
