/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

//H: Array = [string];
//T: Devolver el valor más largo del Array

function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
  let largestString = [0];
  
  for(var i = 0; i < strings.length; i++) {
    if(strings[i].length > largestString.length) {
      largestString = strings[i];
    }
  }

  return largestString;

}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga