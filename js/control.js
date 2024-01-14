// hace de main - ejecuta todo
import { escribe } from './escribir.js';
import { solicita } from './peticion.js';
import { multiplica } from './operacion.js';

export function check() {
// llamada funcion escribir
    escribe('<h1>Práctica JavaScript</h1>'); 
 // solicita USER - escribir OK
    let ok = solicita('Por favor, introduzca "ok" si desea continuar.');

// ZONA CONTROL
    if (ok !== 'ok') {
        escribe("<hr><h3>Por favor recargue la página e intente de nuevo introducir 'ok' para acceder.</h3>");
    } else {
        console.log("Todo ok - continue");
        let num = parseInt(solicita('Por favor, introduzca número entero.'));
    // controla entero y entre 1 y 10
        if (num > 0 && num < 11 && num === Math.floor(num)) { 
            console.log(" Núm. correcto\ncreando tabla multi del " + num);
            multiplica(num); // llamada funcion multiplicar
            console.log("Creado con éxtio\nSayonara, baby!!!");
        } else {
            console.log("introdujo número negativo o mayor que 10");
            escribe("<hr><h4>Lo siento, no es un número entero, o es cero, o mayor que diez<br>deberá recargar la página y comenzar de nuevo.</h4>");
        }
    }
}