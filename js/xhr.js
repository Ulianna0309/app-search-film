const getData = (url) => new Promise((resolve, reject) => {
   let xhr = new XMLHttpRequest();
   
   xhr.open('GET', url);
  
   xhr.onload = () => {
   	if (xhr.status === 200){
   		let json = JSON.parse(xhr.response);

   	resolve(json.Search);
    } else reject(xhr.statusText);
   };


   xhr.onerror = (err) => reject(err);
   xhr.send();

});

let search = 'Iron man';


getData(`http://www.omdbapi.com/?s=${search}&apikey=637af28&`)
.then((movies) => movies.forEach((movie) => addMovieToList(movie)));
