/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

//H: amigos: Array = [{object}]; nombre: string = nombre; 
//T: Retornar el objeto con la información del amigo que busca por medio del nombre
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  let amigoEncontrado = {};

  for(var i = 0; i < amigos.length; i++) {
    if(amigos[i].nombre === nombre){
      amigoEncontrado = amigos[i];
    }
  }
  
  return amigoEncontrado;

}

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo