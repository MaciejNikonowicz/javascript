const http = new EasyHTTP();

// USER DATA
const data = {
    name: 'John doe',
    uername: 'johndoe',
    email: 'johndoe@doe.com'
}

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log(error));


// Post users
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));


// Update Post
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error));

// DELETE Post
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(error => console.log(error));