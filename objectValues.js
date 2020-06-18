/*
    El método Object.values() devuelve un array con los valores 
    correspondientes a las propiedades enumerables de un objeto.
    Las propiedades son devueltas en el mismo orden

*/

const user = {
    nombre: 'pedrito',
    apellido: 'perez',
    edad: '10 años',
    sexo: 'masculino',
    ocupacion: 'estudiante'
}

const valuesObject = Object.values(user);
console.log(valuesObject);


const costs = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49,
    phone: 95,
    transport: 60
}

const reducer = Object.values(costs).reduce(
    function getValues(acc, cur) {
        return acc + cur;
    });

console.log(reducer);

[1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
    function getValues(acc, cur) {
        return acc + cur;
    }
)