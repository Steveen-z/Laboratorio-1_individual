/*El usuario debe ingresar dos números, crear una función que reciba estos números, y calcule cual es la distancia que
 existe entre sus digitos. Para realizar este ejercicio ambos números tienen que tener la misma longitud.*/


 function SumaElements(array) {
    let sum = 0;

    array.map((Element) => sum += Element)
    return sum;
}

function septum2(params, limit) {
    const arrayPer = [];
    let C, A;
    do {
        params = prompt("Ingrese un numero");
        if (params.length == 0) {
            alert("No puede estar vacio");
        }
        else if (isNaN(params)) {
            alert("Ingrese valores validos");
        } else if (params.length != limit) {
            alert(`El numero ingresado no contiene ${limit} digitos`)
        }
        else {
            C = params.toString();
            for (let i = 0; i < C.length; i++) {
                arrayPer.push(Number(C[i]));
            }
            A = SumaElements(arrayPer);
            return A;
        }
    } while (params.length == 0 || isNaN(params) || params.length != limit)
}
function septum(params) {
    const arrayPer = [];
    let C, A, D = 0, limit, E;
    do {
        params = prompt("Ingrese un numero");
        if (params.length == 0) {
            alert("No puede estar vacio");
        }
        else if (isNaN(params)) {
            alert("Ingrese valores validos");
        }
        else {
            limit = parseInt(params.length);
            C = params.toString();
            for (let i = 0; i < C.length; i++) {
                arrayPer.push(Number(C[i]));
            }
            A = SumaElements(arrayPer);
            E = septum2(0, limit)
            D = Math.abs(A - E);
            return D;
        }

    } while (params.length == 0 || isNaN(params));

}


let prueba = septum();
console.log(`El resultado es: ${prueba}`);
