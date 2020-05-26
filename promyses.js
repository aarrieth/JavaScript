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
    .catch((error) => console.error(error));


fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.error(err));

const URL = 'https://yts.mx/api/v2/list_movies.json';
fetch(URL)
    .then((response) => {
        //console.log(response);
        return response.json();
    })
    .then((data) => {
        return data;
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.error(err));

const promise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Todo ok por aquí!')
            }, 1000);
        } else {
            reject(new Error('Whooops!'));
        }
    });
}


promise()
    .then((resolve) => console.log(resolve))
    .catch((err) => console.error(err));

fetch('https://rickandmortyapi.com/api/character/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.info.count);
        return data;
    })
    .then(data => {
        console.log(data.results[0].name);
        return data;
    })
    .then(data =>
        console.log(data.results[0].origin.name)
    )
    .catch(err => console.error(err));


const url_api = 'https://rickandmortyapi.com/api/character/';
const getCharacter = (url_api) => {
    return new Promise((resolve, reject) => {
        fetch(url_api)
            .then(response => {
                resolve(response.json());
            })
    });
};

getCharacter(url_api)
    .then(response => {
        console.log(`Hola, soy ${response.results[0].name}`);
        return response
    })
    .then(response => {
        console.log(`Nro. de episodios: ${response.results[0].episode.length}`);
        return response;
    })
    .then(response => {
        console.log(`Origen: ${response.results[0].origin.name}`);
    })
    .catch(err => console.error(`Ha ocurrido un error`));