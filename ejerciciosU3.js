//1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularImc(peso, altura) {
  let calculoMasaCorporal = peso / (altura * altura);

  console.log(`Tu IMC es de ${calculoMasaCorporal}`);
}

calcularImc(55, 1.55);

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.

/* EXPLICARÉ MI SOLUCIÓN AQUÍ. Básicamente lo que hice fue recibir el número en mi 
función, de ahí establecer 3 variables, el valor de ambos multplicadores para hacer el
factorial y otra variable que almacena la respuesta final, esta la inicié en 0. 
De ahí establecí un while donde digo, mientras el multiplicador 1 que inició en cero
sea menor al numero que recibí en la función, haz lo siguiente: asigna a respuesta
final el valor de multiplicar multiplicador1(con valor 1) por multiplicador2(con valor rescatado del número dado a la función), una vez hecho esto, reasigna el valor de 
multiplicador 2 por el que tengo almacenado en respuesta final y suma uno a multiplicador uno. Así multiplicador uno, ahora entrará como 2 al ciclo while, mientras que multiplicador2 entrará con el valor del resultado de la multiplicación. 
Esto lo hice para NO alterar la condición while, que sería lo que pasara si entrara el 
número tal cual*/

function factorial(numero) {
  //tengo que hacer una multiplicación de el numero por todos los números menores a este mismo y devolver el resultado de esta multiplicación
  let multiplicador1 = 1;
  let multiplicador2 = numero;
  let respuestaFinal = 0;

  while (multiplicador1 < numero) {
    respuestaFinal = multiplicador1 * multiplicador2;
    multiplicador2 = respuestaFinal;
    multiplicador1++;
  }
  return respuestaFinal;
}

console.log(`El factorial del número dado es ${factorial(6)}`);

//EJEMPLO DEL EJERCICIO DEL CURSO, está usando recursividad
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversionADolares(valor) {
  let dolar = 4.8;
  let cotizacion = dolar * valor;

  return cotizacion;
}

console.log(
  `Por la cantidad que tienes, recibirás ${conversionADolares(10)} reales.`
);

/* codigo de respuesta curso */
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.8;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

//4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaPerimetroSala(alto, ancho) {
  let perimetro1 = 2 * (alto + ancho);
  let area1 = alto * ancho;

  console.log(
    `La sala rectángular tiene ${area1} de área y ${perimetro1} de perímetro`
  );
}

areaPerimetroSala(10, 12);

//5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function areaYPerimetro(radio) {
  let pi = 3.14;
  let area = pi * (radio * radio);
  let perimetro = 2 * pi * radio;

  console.log(
    `El area del círculo es ${area} y su perímetro es de ${perimetro}`
  );
}

areaYPerimetro(5);

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaDeMultiplicar(numero) {
  for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
    let multiplicacion = multiplicador * numero;

    console.log(`${numero} x ${multiplicador} = ${multiplicacion}`);
  }
}

tablaDeMultiplicar(10);
