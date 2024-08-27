/*Crear un programa que permita ingresar un conjunto de valores (strings) y 
determinar cuales palabras de las ingresadas pertenecen a un color del arcoiris. */

const Artdeco = [`rojo`, `naranja`, `amarillo`, `verde`, `azul`, `indigo`, `violeta`];


function SolCant() {
    do {
        repeticiones = prompt("escriba la cantidad de palabras que quiera ingresar en el array");
        if (repeticiones.length == 0) {
            alert("No puede estar vacio");
        }
        else if (isNaN(repeticiones)) {
            alert("Ingrese numeros validos");
        }
        else {
            repeticiones = parseInt(repeticiones);

            if (repeticiones < 1) {
                alert("Ingrese un número mayor a 0");
                repeticiones = "";
            }
            else {

            }
        }

    } while (repeticiones.length == 0 || isNaN(repeticiones) || repeticiones < 0);

    return repeticiones;
}

function solicitarPalabra() {
    const Palabras = [];
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/; // Expresión regular para una palabra
    let cant = SolCant();
    let i = 0;

    do {
        palabra = prompt("Ingresa una palabra:");
        if (palabra.length == 0) { //esto puede ser redundante con la ultima validacion pero sirve para especificar el tipo de error que tuvo el usuario
            alert(`Asegurese de ingresar una palabra`);

        }
        else if (!isNaN(palabra)) { //esto puede ser redundante con la ultima validacion pero sirve para especificar el tipo de error que tuvo el usuario
            alert(`Ingrese un caracter valido`);
        }
        else if (!palabra || !regex.test(palabra.trim())) {
            alert(`ingrese una palabra unicamente`);
        } else {
            Palabras.push(palabra.toLowerCase());
            i++;
        }

    } while (!isNaN(palabra) || palabra.length == 0 || !palabra || !regex.test(palabra.trim()) || i < cant);

    return Palabras;
}
function ColoresID(palabras, Colores) {
    return palabras.filter(palabra => Colores.includes(palabra.toLocaleLowerCase()));
}

const prueba = solicitarPalabra();
const coloresEncontrados = ColoresID(prueba, Artdeco);
console.log(`palabras ingresadas: ${JSON.stringify(prueba)} colores encontrados: ${JSON.stringify(coloresEncontrados)}`);