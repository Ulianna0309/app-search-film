const getData = (url) =>  fetch(url)
 .then((response) => response.json())
 .then((json) => {
		if(json.Search) return json.Search;
		throw Error('Сервер вернул не правильный объект')
	});

/*let ironman = getData(`http://www.omdbapi.com/?s=Iron%20man&apikey=637af28&`);
/*let batman = getData(`http://www.omdbapi.com/?s=Batman&apikey=637af28&`);
let superman = getData(`http://www.omdbapi.com/?s=Superman&apikey=637af28&`);*/



/*ironman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));*/

/*batman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));
superman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));*/

/*Promise.all([ironman, batman, superman]).then((result) => result.forEach(movies => movies.forEach(movie => addMovieToList(movie))));*/
inputSearch.addEventListener('keyup', (e) => {
	delay(() => {
		const searchString = e.target.value;
		if (searchString && searchString.length > 4) if (!triggerMode) clearMoviesMarkup();
		getData(`https://www.omdbapi.com/?s=${searchString}&apikey=637af28&`)
		.then((movies) => movies.forEach(
			movie => addMovieToList(movie)))
		.catch(err => console.log(e));
	
	}, 1000);
});