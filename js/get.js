async function getData(url = ''){
const response = await fetch(url,{
	method: "GET",
	 headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
});
if (!response.ok) throw Error (response.status);
return response.json();
}


getData('https://jsonplaceholder.typicode.com/comments?postId=1')
.then(data => console.log(data))
.catch(err => console.log(err));

/*https://jsonplaceholder.typicode.com/posts*/
/*https://jsonplaceholder.typicode.com/posts/1*/