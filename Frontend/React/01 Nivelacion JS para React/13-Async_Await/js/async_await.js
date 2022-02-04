// Promesa
const saludo = () => {
    return new Promise(resolve => {
        resolve('Hola mundo dede una promesa');
    });
};

saludo().then(res => console.log(res));

// Async
const saludoAsync = async () =>{
    return 'Hola mundo desde una funcion async';
};

saludoAsync().then(res => console.log(res));


// Async & Await

const peticion = async () => {
    setTimeout( () =>{
        const datos = {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
              "street": "Skiles Walks",
              "suite": "Suite 351",
              "city": "Roscoeview",
              "zipcode": "33263",
              "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
              }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
              "name": "Keebler LLC",
              "catchPhrase": "User-centric fault-tolerant solution",
              "bs": "revolutionize end-to-end systems"
            }
        };

        console.log(datos);
    }, 2000);
}

peticion().then(console.log);