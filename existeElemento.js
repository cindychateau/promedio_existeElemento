function existeElemento(arreglo, elemento) {
    //Debe de regresar verdadero o falso (true or false) si el elemento que ingresamos 
    //se encuentra en el arreglo
    
    for(var i=0; i<arreglo.length; i++) {
        if(arreglo[i] === elemento) {
            return true;
        }
    }

    return false;

}

var existe = existeElemento([1, 2, 3], 3); //True
console.log(existe);
var existe2 = existeElemento([3, 4, 5], 6); //False
console.log(existe2);