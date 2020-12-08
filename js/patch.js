async function getData(url = '', data = {}){
const response = await fetch(url,{
	method: "PATCH",
	 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(data)
});

if (!response.ok) throw Error (response.status);
return response.json();
}


getData('https://jsonplaceholder.typicode.com/posts/1', {
	title:'my custom body',
	body: 'my custom body text',
	userId: 86
})


.then(data => console.log(data))
.catch(err => console.log(err));

/*https://jsonplaceholder.typicode.com/posts*/
