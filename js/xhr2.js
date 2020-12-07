const getData = (url) =>  fetch(url).then((response) => response.json())
	.then((json) => json.Search);

let ironman = getData(`http://www.omdbapi.com/?s=Iron%20man&apikey=637af28&`);
let batman = getData(`http://www.omdbapi.com/?s=Batman&apikey=637af28&`);
let superman = getData(`http://www.omdbapi.com/?s=Superman&apikey=637af28&`);



ironman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));

/*batman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));
superman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));*/

/*Promise.all([ironman, batman, superman]).then((result) => result.forEach(movies => movies.forEach(movie => addMovieToList(movie))));*/
