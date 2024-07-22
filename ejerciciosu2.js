//1. Crear una función que muestre "¡Hola, mundo!" en la consola.

function holaMundo() {
  return console.log("¡Hola, mundo!");
}

holaMundo();

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludo(nombre) {
  return console.log(`¡Hola, ${nombre}!`);
}

saludo("Gis");

//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function duplica(numero) {
  return console.log(`El doble de ${numero} es ${numero * 2}`);
}

duplica("50");

//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(numero1, numero2, numero3) {
  //aquí el ().tofixed(2) sirve para que solo muestre los dos primeros números después del decimal
  let promedio = ((numero1 + numero2 + numero3) / 3).toFixed(2);

  console.log(
    `El promedio de ${numero1}, ${numero2} y ${numero3} es ${promedio}`
  );
}

promedio(9, 6, 10);

//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function muestraNumeroMayor(valor1, valor2) {
  if (valor1 > valor2) {
    console.log(`El numero mayor entre ${valor1} y ${valor2} es ${valor1}`);
  } else {
    console.log(`El numero mayor entre ${valor1} y ${valor2} es ${valor2}`);
  }
}

muestraNumeroMayor(80, 26);
/*
SOLUCION CURSO 

function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);
*/

//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicaPorMismo(number) {
  console.log(
    `El resultado de multiplicar ${number} por si mismo es ${number * number}`
  );
}

multiplicaPorMismo(8);
