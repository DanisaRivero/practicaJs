//let nombre;

//nombre = prompt("Igresa tu nombre");

//? funcion que permite verlo en nuestra página ==> documente.write();

/*
*document.write(`Tu te llamas ${nombre} !`);
*let edad;
*edad = prompt('Ingresa tu edad')
*document.write(` También tienes ${edad} años`);
*/


//! EJEMPLO DE ARRAYS
const nombreEstudiantes = ['Danisa', 'Maciel', 'Macaco', 'Mono', 'Fulanito'];
const cosasSurtidas = ['Gato', 33, false, {edad: '21 años'}];
console.log(nombreEstudiantes);

//! Propiedad length 'siempre cuenta desde el 0'
console.log(nombreEstudiantes.length); //5

//! ACCESO A UN ELEMENTO ''
console.log(nombreEstudiantes[2]); //Macaco

//! ASIGNACIÓN
nombreEstudiantes[3] = 'Brayan' //cambié 'MONO' por 'BRAYAN'
console.log(nombreEstudiantes)


//? EJEMPLO DE OBJETCS
const persona = {
  dni: 43269713,
  nombre: 'Danisa Rivero',
  vive: false,
  conocimientos: ['React', 'Node'],
  estudios: {
    secundario: 'completo',
    terciario: '-',
    universitario: 'completo',
  },
  alumnos: [
    {nombre: 'Pepe', apellido: 'Perez'},
    {nombre: 'Pancho', apellido: 'Mamani'},
  ],
};
console.log(persona);

//? Acceder a los valores por medio de punto
console.log(persona.nombre); // Danisa Rivero

//? Acceder a los valores por medio de corchete
console.log(persona['nombre']); //Danisa Rivero

//? Acceder a los valores por medio de corchetes y variables
const keyNombre = 'nombre';
console.log(persona[keyNombre]); //Danisa Rivero


//? EJEMPLO de asignación de valores
const nuevoUsuario = {
  esNuevo: true,
};
const deporte = 'basket profesional';
const keyEdad = 'edad';

nuevoUsuario.nombre = 'Manu Ginobili',
nuevoUsuario['deporte'] = deporte;
nuevoUsuario[keyEdad] = 45;
console.log(nuevoUsuario);


//? ESTRUCTURAS DE CONTROL O CONDICIONALES!!
 /*
 * if: esta declaración es la condición más simple para tomar decisiones,
 * decide si una declaración o bloque de instrucciones se ejecutará o no.
 */

//* Ejemplo de if sin bloque de código
// if (num > 10) console.log('num es mayor a 10');
 
//* Ejemplo de if con bloque de código
// if (num > 10) {console.log('num es mayor a 10');}

 const nota = 7;
console.log("He realizado mi examen.");

// Condición (si nota es mayor o igual a 5, al ser verdadera esta mostrará en la consola el string que queramos)
if (nota >= 5) {
  console.log("¡Estoy aprobado!");
}