const pepito = {
    nombre: "pepito",
    edad: 20,
    enClase: true
}

const carlitos = {
    nombre: "carlitos",
    edad: 21,
    enClase: true
}
const juanito = {
    nombre: "juanito",
    edad: 18,
    enClase: false
}
arrayEstudiantes = [pepito, carlitos, juanito];
const estudiantesEnClase = arrayEstudiantes.map( (value) => value.enClase);
console.log(estudiantesEnClase);
