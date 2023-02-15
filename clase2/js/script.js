//practica votacion

// 0 -15 Prohibido votar
// 16-17 Optativo votar
// 18-69 Obligatorio votar
// 70-mirta Optativo votar

// yo
 
/* let edad = parseInt(prompt('Ingresa tu edad para votar'))


if (edad <= 15){
      alert('Sos menor no podes votar');

}else if((edad >=16)&&(edad <=17)){

      alert('Podes votar si queres')  ;

}else if((edad >=18)&&(edad <=69)){
      alert('Es obligatorio que votes');

}else if (edad >=70){
      alert('No es obligatorio que votes')}
  */

// la profe

let edadUsuario= parseInt(prompt('Ingresa tu edad'));

let edadObligatoria=18;
let edadMinima=16;
let edadMaxima=69;

if (edadUsuario >=edadObligatoria && edadUsuario <=edadMaxima){

  alert('Es obligatorio votar')

}else if((edadUsuario >= edadMinima ) || (edadUsuario > edadMaxima)) {

    alert ('es optativo votar');

}else{
  alert('No pode votar');
}