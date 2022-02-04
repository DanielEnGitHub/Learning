axios.get('https://jsonplaceholder.typicode.com/users/5')
    .then( ({data}) => console.log(data.username) );