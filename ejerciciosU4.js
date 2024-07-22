// 1. Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ["Javascript", "C", "Kotlin", "Python"];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

//4.Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function listaLenguajes() {
  console.log(lenguagesDeProgramacion);
}

listaLenguajes();

//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function listaInversa() {
  let invertirOrden = lenguagesDeProgramacion.reverse();
  console.log(invertirOrden);
}

listaInversa();

/*
**** SOLUCION DEL CURSO ****


function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();
 */

//6. Crea una función que calcule el promedio de los elementos en una lista de números.

// **** SOLUCIÓN MIA ****

//establezco la variable promedio y suma de calificaciones
let promedio = [10, 9, 8, 7, 6, 10];
let sumaCalificaciones = 0;

//inicio función promedia con dos funciones anidadas
function promedia(promedio) {
  // re asigno valor a suma calificaciones,que es el reduce del promedio dado
  sumaCalificaciones = promedio.reduce(sumaTotalCalificaciones);

  //esta función es la que se llama en el reduce, para que haga la suma de los elementos del array
  function sumaTotalCalificaciones(acumulador, siguienteCalificacion) {
    return acumulador + siguienteCalificacion;
  }
  /*esta función lo que hace es llamar al valor de suma calificaciones, que será el resultado de reduce y 
lo divide entre el largo del array promedio, eso es lo que regresa*/
  function promedioFinal() {
    return sumaCalificaciones / promedio.length;
  }
  //finalmente en la función principal le digo que me haga un return de la función promedio final
  return promedioFinal();
}
/* y al final hago un console.log de la función principal y le agrego un .toFixed para que sin importar 
cual sea el promedio, me muestre solo los dos primeros decimales */
console.log(promedia(promedio).toFixed(2));

/* *** SOLUCIÓN DEL CURSO ***

function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log("Média:", media); */

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// **** SOLUCIÓN MIA ****

//Se establecen las variables, para el array de números, el numero mayor y menor inicializados en cero
let listaNumeros = [450, 35654, 3, 10];
let numeroMenor = 0;
let numeroMayor = 0;
// se genera una función principal que calcula el número mayor y menor
function calcularMayorYMenor(lista) {
  /*con estas variables se llamará a afuera el resultado de aplicar reduce (que reduce el array a devolver 
  un solo número ) y aplicar la función que recibe como parámetro*/
  numeroMenor = lista.reduce(numeroMin);
  numeroMayor = lista.reduce(numeroMax);
  //primera función, recibe parametro de numero a comparar y siguiente número.
  function numeroMin(primerNumero, segundoNumero) {
    /*aquí a través del método Math.min sacaremos el número mínimo: Math.min recibe dos parámetros, y compara
    a estos para lanzar el menor de los dos, gracias a que llamamos con lista al array, reduce intenta 
    hacer el trabajo de devolver solo uno y el criterio con el que se elige es math.Min*/
    return Math.min(primerNumero, segundoNumero);
  }
  //Esta función hace lo mismo que Math.min con la diferencia de que lanzará al mayor.
  function numeroMax(numero1, numero2) {
    return Math.max(numero1, numero2);
  }
}
//finalmente llamamos a la función con la variable del parámetro que entra
calcularMayorYMenor(listaNumeros);
// y hacemos un console.log con template strings de los resultados
console.log(`El número mínimo es ${numeroMenor} y el mayor es ${numeroMayor}`);

// *** SOLUCIÓN DEL CURSO ***
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log("Mayor:", mayor);
  console.log("Menor:", menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
/* Este ejercicio se solucionó estableciendo una array de números, de ahí se reservó en una variable llamada
sumaTotal a numerosASumar y se llamó al método reduce, con este método se puede sumar los elementos del 
array usando una función para hacerlo, en este caso fue la función sumaNumeros que recibió el acumulador
y el siguiente valor, por lo tanto en esa lógica entran primero 10 y 15, se suman y dan 25 que se almacena,
en acumulador, de ahí pasan 25 y 6 y asi sucesivamente hasta que termina de recorrer el array, en ese
momento arroja el acumulador */

let numerosASumar = [10, 15, 6, 4];

let sumaTotal = numerosASumar.reduce(sumaNumeros);

function sumaNumeros(acumulador, siguienteValor) {
  return acumulador + siguienteValor;
}

console.log(sumaTotal);

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// generé la lista de array con las frutas
let listaFrutas = ["manzana", "pera", "uva", "sandía", "lichi"];

//generé la función posicionFruta y recibe una condición "fruta"
function posicionFruta(fruta) {
  //si fruta(que será recibida cuando se llame a la función) está incluido en el array de frutas
  if (listaFrutas.includes(fruta)) {
    //se crea una variable que se llama posición y es igual a el index que tiene esa fruta en frutas
    let posicion = listaFrutas.indexOf(fruta);
    //regresará el valor albergado en posición(que es el el index de donde está el valor de frutas en el array)
    return posicion;
  } else {
    //de lo contrario, regresará -1 (que no está pues, podría poner un texto)
    return "-1";
  }
}
//finalmente un console log con el llamado
console.log(posicionFruta("lichi"));

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// se establecen los arrays
let lista1 = [20, 5, 3, 20];
let lista2 = [18, 20, 7, 30];
//se establece una variable para tener un array vacío donde se almacenará la info
let sumaIndices = [];

//se establece una función llamada sumar arrays
function sumaArrays(array1, array2) {
  /*a través de un for se establece que si el indice es cero, mientras este no supere al largo del array de la lista, entonces debe sumarse uno más a i (esto hace que pase del indice 0 al 1 y así)*/
  for (let i = 0; i < lista1.length; i++) {
    //se da una variable donde se suman el valor del mismo indice en el primer y segundo array
    let suma = array1[i] + array2[i];
    //y con push los almacenamos en la variable sumaIndices
    sumaIndices.push(suma);
  }
  //y finalmente regresamos los valores almacendos en sumaIndices, en este caso el que mostrará será el array que se forma hasta que se rompe la condición del if
  return sumaIndices;
}
//finalmente se hace un console.log de la función y se le pasan como parámetro las listas
console.log(sumaArrays(lista1, lista2));

//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let numerosAUsar = [2, 4, 6, 8];
let alCuadrado = 0;

// map tiene un comportamiento similar a reduce, se le puede pasar una función para que se ejecute, pero este arroja un nuevo array con los resultados de la función a la que invocó

function resultadoAlCuadrado(listado) {
  alCuadrado = listado.map(multiplicaPorSi);

  function multiplicaPorSi(numero) {
    return numero * numero;
  }
  return alCuadrado;
}

console.log(resultadoAlCuadrado(numerosAUsar));
