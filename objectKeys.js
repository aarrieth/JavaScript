/**
 * devuelve un array de las propiedades namesde 
 * un objeto, en el mismo orden como se obtienen 
 * en un loop normal 
 * */

const user = {
    nombre: 'pedrito',
    apellido: 'perez',
    edad: '10 años',
    sexo: 'masculino',
    ocupacion: 'estudiante'
}

//obtener propiedades 

console.log(Object.keys(user));


//imprimir propiedades y valores de un objeto.
Object.keys(user).forEach(function viewProps(value, index, array) {
    console.log(`La propiedad ${value} tiene el valor: ${user[value]}`);
});

//obteniendo valores del objeto user.
const values = Object.keys(user).map(key => user[key]);
console.log(values);