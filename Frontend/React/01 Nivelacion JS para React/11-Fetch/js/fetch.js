// REST: trabaja con archivos JSON
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data));

// XMLHttpRequest() //AJAX

// SOAP
// <xml>
// </xml>