/*
estos elementos están usando el DOM para poder ser modificados. Se les asigna una variable, se almacena en ella un document query selector y se llama por medio de las etiquetas, también se puede llamar por las clases (supongo que esa sería una mejor práctica) y finalmente se pone un titulo.innerHTML para asignarle un valor (en este caso una cadena de texto) para mostrar

let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10."; 

Hay una manera de hacer este mismo código, pero de manera que evita la repetición de generar una variable, llamar al document query selector y al innerHTMl y es usando una función que dejaré aquí abajo explicada, con esto se acorta la cantidad de código a usar

*/

//Se está generando una variable donde se almacena la función en la que se genera el numero secreto de manera aleatoria
let numeroSecreto = generarNumeroSecreto();
//estamos llamando a un console.log para verificar en consola que efectivamente se esté generando el número

console.log(numeroSecreto);

// Aquí cree la función que me permitirá llamar elementos de HTML para modificarlos en js, está recibiendo dos parámetros que es el elemento de HTML y el texto que irá en el mismo
function asignarTextoElemento(elemento, texto) {
  /* Aquí el nombre de la variable se hizo genérico con el fin de que sea más claro, se llama por DOM (se hace con document query selector) al elemento, aquí se usa el elemento de HTML (el primer parámetro que se recibe) es importante entender que los parámetros se usarán de acuerdo al orden en el que se reciben*/
  let elementoHTML = document.querySelector(elemento);
  //en este está haciendo la modificación del texto del elemento de HTML, usando el segundo valor recibido en el parámetro
  elementoHTML.innerHTML = texto;
}

//crearemos una función que será llamada en html
function intentoDeUsuario() {
  alert("Click desde el botón");
}

//esta es la función para generar el número, no recibe parámetro
function generarNumeroSecreto() {
  //se puede crear una variable aquí, las variables dentro de las funciones tienen un alcance local, solo funcionan dentro de la misma, si están afuera de la función son de alcance global, pero no son necesarias, en este caso como solo es un elemento, se usa el return que "devuelve" el resultado de generar el número al azar, redondearlo para que de el numero más bajo cercano, en un límite de 10 y finalmente se le agrega uno para que cumpla que el número sea entre 1 y 10
  return Math.floor(Math.random() * 10) + 1;
}

// Aquí se está llamando a la función y se le están dando los datos que serán modificados, osea los parámetros, las cosas que varían en ese código, nota que ambos están entre comillas y son separados por una coma
asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Adivina un número entre 1 y 100");
