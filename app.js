//la explicación del código está en appexplicaciones.js

// se declaran con valor 0 pero se les asigna valor en la función condicionesIniciales
let numeroSecreto = 0;
let intentos = 0;
//aquí generamos una variable que almacena el array que será usado, este está vacío
let listaNumerosSorteados = [];
let maximoIntentos = 10;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

/* esta función es en la que estamos llegando a lo que se escribe en el input de html, 
esto lo hacemos a través de get.elementById, así llegamos al input, y con.value accedemos al valor que se colocó en ese input 
También es imporante ver que se está colocando un parseInt para que el valor que al ser ingresado es tomado como string, sea tomado como número*/
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  console.log(numeroSecreto);

  /*console.log(`El número del usuario es ${numeroDeUsuario}`);
  //typeof es una manera de saber que tipo de dato es el que está almacenado en esa variable
  console.log(typeof numeroDeUsuario);

  console.log(typeof numeroSecreto);
  aquí estamos comprobando si hay igualdad entre el número de usuario y número secreto. El resultado será un boolean (true/false) */

  if (numeroDeUsuario === numeroSecreto) {
    /*
    Al igual que en el primer curso se usa condicionales, si el numero dado es igual al secreto
      automáticamente lanza el mensaje de acierto, de lo contrario pasa al else, donde se anido un if
      en caso de que sea mayor o un else en caso de que sea menor como pistas para el usuario 
      
      Dentro el parámetro de la función estamos usando un template string, esto para poder indicar cuantos intentos llevamos y se usa un operador ternario (que no es otra cosas que una manera abreviada de hacer un if/else) para que SI AL PRIMER INTENTO SE ADIVINA se ponga la palabra intento, DE LO CONTRARIO se colocará intentos 
  */
    asignarTextoElemento(
      "p",
      `Acertaste el número secreto en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      } 🎉🎉`
    );
    /* Con este document estamos accediendo por DOM al elemento por su id, en este caso es el botón al que
    está asociado reiniciar, ahí le decimos que queremos que remueva el atributo inactivo que tiene en el 
    lado del HTML y así el botón se active */
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero es mayor al número secreto");
    } else {
      asignarTextoElemento("p", "El numero es menor al número secreto");
    }
    intentos++;
    // aquí se está llamando la función para limpiar la caja
    limpiarCaja();
  }

  return;
}

/* Esta función está limpiando la caja de texto, llama por document query selector al id de la caja
y rescata el valor que contiene, a este valor le reasigna "" que es lo que permite que quede vacía */
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

/* En esta función se están haciendo los cálculos para que pueda generar el número al azar */

function generarNumeroSecreto() {
  //metemos dentro de una variable la generación del número al que sea entre 1 y 10
  let numeroGenerado = Math.floor(Math.random() * maximoIntentos) + 1;
  //console.log de control, para poder ver el numero generado y la lista de array
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  /* Para evitar caer en un loop se genera una condición if donde se establece como condición que sí
  el tamaño de la lista de elementos dentro del array es igual al máximo de intentos definidos dentro 
  de la variable que lleva ese número, entonces deberá asignarle al párrafo el texto de que ya se 
  sortearon todos los números posibles, de lo contrario hará lo descrito en el if/else anidado*/
  if (listaNumerosSorteados.length == maximoIntentos) {
    asignarTextoElemento("p", "ya se sortearon todos los números posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      //haz la recursividad, como ya está necesito que generes un nuevo número
      return generarNumeroSecreto();
      //de lo contrario, si no está...
    } else {
      //agregalo al array de listaNumerosSorteados al elemento numeroGenerado
      listaNumerosSorteados.push(numeroGenerado);
      // muestra (regresa pues, sácalo) el numeroGenerado
      return numeroGenerado;
    }
  }
}
//Si el número generado está en la lista..

/* En esta función se establecen todas las condiciones que se necesitan para inicializar el juego, como es
la asignación de los textos en h1 y p, con cuantos intentos se inicia el juego (al menos necesita intentarse
 una vez para ganar y se debe generar un número secreto
 ) */
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Adivina un número entre 1 y ${maximoIntentos}`);
  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
}

/* Esta función es llamada al dar clic en el botón de nuevo juego y llama a las funciones de limpiar caja,
y re establece las condiciones inciales con la función condicionesIniciales. También llama al botón con 
su id de "reiniciar" y le establece el atributo, para hacerlo este recibe dos parámetros: el atributo que 
será cambiado y el valor (booleano) que se le asignará, en este caso desabilitado se marca como verdadero*/
function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  condicionesIniciales();
  //deshabilitar el botón de iniciar nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

// Ahora en lugar de llamar a asignarTextoElemento, se llama a condicionesIniciales, ya que llama a todas las cosas que deben ser pre-configuradas para el juego como lo es: los textos, el número de intentos y la generación de un número aleatorio
condicionesIniciales();
