async function getData(url = '', data = {}){
const response = await fetch(url,{
	method: "POST",
	 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(data)
});

if (!response.ok) throw Error (response.status);
return response.json();
}


getData('https://jsonplaceholder.typicode.com/posts', {
	title:'my custom body',
	body: 'my custom body text',
	userId: 205
})


.then(data => console.log(data))
.catch(err => console.log(err));

/*https://jsonplaceholder.typicode.com/posts*/
