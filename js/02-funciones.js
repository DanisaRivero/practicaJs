//* Creando una función
function unaFuncion(){
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}
//* Llamamos a la función
unaFuncion()

//* Función con return
function unaFuncion2(){
  console.log(1);
  return 'Hola';
}

unaFuncion2()

const saludo = unaFuncion2();
console.log(saludo);


//? Pasar parámetros en una función
function suma (a, b){
  return a + b;
}

const resultado = suma (5,10);
console.log(resultado);