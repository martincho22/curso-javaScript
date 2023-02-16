// Ciclos(iteraciones) for while y do while

//bucles x conteo ---for--- se de antemano cuantas veces se repite y se termina el ciclo.

//bucles condicionales while y do while se repetira indefinidamente ,hasta que una condicion lo pare.

//for ( desde;hasta;actualizacion) la actualizacion es el valor que se le asigna a la variable x cada vuelta.

// java script ignora los espacion de linea

// i++ i=i+1
// ++ operador de incremento
// -- operador de decremento

/* for( let i=0; i<10; i++ ){

console.log('Esto es una linea de codigo',i+1);

}
 */
/* 
for (i = 10; i >= 1; i--) {
  alert("Faltan" +  i  + "segundos para el Año Nuevo");
}

alert("Feliz año Nuevoooooo!!!,hubo 25 descorches en las cabezas");
 */

/* let factor = parseInt(prompt('ingresa un numero y te daremos su tabla'));

for(i=0; i<=10; i++){
    console.log('esta es la tabla del'+' '+ factor +'x'+ i + '=' +factor*i)
} */

//login

let passUser = 'samuraix';

for (let i=0; i<=3; i++){
  let login = prompt('Ingrese su clave , para acceder al sistema');
  if(login==passUser){
    alert('Bienvenido al Sistema!');
    break;
  }
}

alert('fin de ciclo!!!!!')