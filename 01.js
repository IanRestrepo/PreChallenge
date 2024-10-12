/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// H: Array = [number, string];
//T: Devolver un arreglo nuevo con solamente los numneros enteros: newArray = [number]

function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

  let newArray = [];

  for(var i = 0; i < array.length; i++) {
    if(typeof array[i] !== "number"){
      console.log(array[i] + ' Is not a number');
    } else {
      newArray.push(array[i]);
    }
  }

  return newArray;

}

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros