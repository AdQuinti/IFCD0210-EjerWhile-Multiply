// Función para escribir en el documento
export function escribe(element) {
    //document.writeln(element);
    const DIV = document.createElement('div');
    DIV.innerHTML = element;
    document.body.appendChild(DIV);
}