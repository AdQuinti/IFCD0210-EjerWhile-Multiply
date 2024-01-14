import { escribe } from './escribir.js';
// Función para crear una tabla de multiplicar
export function multiplica(number) {
    let result = 0;
    let i = 1;
    escribe("<hr><table><tr><td id='title'>Tabla de multiplicar del " + number + "</td></tr>");
    while(i <= 10){
        result = number * i;
        escribe("<tr><td>" + number + " x " + i + " = " + result + "</td></tr>");
        i++
    }
    escribe("</table>");
}