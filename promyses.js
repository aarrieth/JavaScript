fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data[0].name);
        return data;
    })
    .then((data) => {
        console.log(data[0].email);
        return data;

    })
    .catch((error) => console.error(error))


fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //console.log(data);
        console.log(`Hola, soy ${data.results[0].name}`);
        //const name = data.results[0].name;
        return data;
    })
    .then((data) => {
        console.log(`Soy originario de: ${data.results[0].origin.name}`);
        //const origin = data.results[0].origin.name;
    })
    .catch((err) => console.error(err))
