let movieList = null;
let triggerMode = false;
let inputSearch = null;
const createStyle = () =>{
  const headStyle = document.createElement('style');
  headStyle.innerHTML = `
*{
	box-sizing: border-box;
}
body{
	margin: 0; 
} 
.wrapper{
	padding: 20px;
}
.movies {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 20px;
}
.movie{
	display: flex;
	align-content: center;
	justify-content: center;
}
.movie__img{
	width: 100%;
	object-fit: cover;
}`;
};
const triggerModeHandler = () => triggerMode = !triggerMode;

const createHeader =(container) => {
	const header = document.createElement('h1');
	header.innerText = 'Приложение для поиск фильмов';
	container.append(header);
};
const setAttribute = (el, attrs) => {
	for (let key in attrs) el.setAttribute(key, attrs[key]);
};
const createSearchBox = (container)=> {
	const searchBox = document.createElement('div');
	const input = document.createElement('input');
	const labelForInput = document.createElement('label');
	const checkbox = document.createElement('input');
	const labelForCheckbox = document.createElement('label');

	searchBox.setAttribute('class', 'search');
	setAttribute(input, {
		class: 'search__input',
		id: 'search',
		placeholder: 'Начните вводить текст..',
		type: 'text'
	});

	setAttribute(labelForInput, {
		class: 'search__label-input',
		for: 'search'
	});
	labelForInput.innerText ='Поиск фильмов';

	setAttribute(checkbox, {
		class:'search__checkbox',
		id: 'checkbox',
		type: 'checkbox'
	});
	checkbox.addEventListener('click', triggerModeHandler);
	setAttribute(labelForCheckbox, {
		class:'search__label-checkbox',
		for: 'checkbox'
	});
	labelForCheckbox.innerText ='Добавлять фильмы к уже существующему списку';

	searchBox.append(labelForInput, input, checkbox, labelForCheckbox);
	container.append(searchBox);
}; 

const createMarkup = () =>{
	const container = document.createElement('div');
	container.classList.add('wrapper');

	createHeader(container);
	createSearchBox(container);

	const movies = document.createElement('div');
	movies.classList.add('movies');
	container.appendChild(movies);
	document.querySelector('body').prepend(container);
	movieList = document.querySelector('.movies');
};

const addMovieToList = (movie) => {
	const item = document.createElement('div');
	const img = document.createElement('img');

	img.src = movie.Poster;
	img.classList.add('movie__img');

	item.classList.add('movie');
	item.appendChild(img);
	movieList.appendChild(item);
};
createMarkup()
createStyle()