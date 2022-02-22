function promedio(arreglo) {
    //Debe de obtener el promedio dado un arreglo
    var prom = 0;

    for(var i=0; i<arreglo.length;i++) {
        prom += arreglo[i];
    }

    return prom/arreglo.length;
}


var prom = promedio([1, 2, 3]);
console.log(prom);