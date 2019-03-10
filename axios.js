const axios = require('axios');


const url = 'https://jsonplaceholder.typicode.com/todos/1';


// Make a request for a user with a given ID
axios.get('/user?ID=12345')
	.then(function (response) {
		// handle success
		console.log(response);
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.then(function () {
		// always executed
	});

// Make a request for a user with a given ID
axios.get(url)
	.then(response => console.log(response))
	.catch(error => console.log(error))
	.then(() => /* always executed */ console.log);