//Funciones

/* function saludar(nombre) {
  alert('Buenas tardes!'+ nombre);
}

saludar('martin'); */

// funcion unNombre(parametrosa,parametrosb){ bloque de codigo + return}

/* function sumarDosNumeros (numeroA,numeroB){

    let resultado = numeroA + numeroB;

    return resultado;
}

console.log(sumarDosNumeros(22, 22)); */

function calculadora(numeroA,numeroB,operacion){


    switch(operacion){

        case '+' :
            return numeroA + numeroB;
        case '-' : 
            return numeroA - numeroB;
        case '*' :
            return numeroA * numeroB;
        case '/' :
             return numeroA / numeroB;
        default : 
            return 'Operacion invalida';     




    }

alert(calcular(25,33,'8'))





}