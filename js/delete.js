async function getData(url = ''){
const response = await fetch(url,{
	method: "DELETE",
});

if (!response.ok) throw Error (response.status);
return response.json();
}


getData('https://jsonplaceholder.typicode.com/posts/1')
	

.then(data => console.log(data))
.catch(err => console.log(err));

/*https://jsonplaceholder.typicode.com/posts*/
