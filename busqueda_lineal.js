function busquedaLineal(arreglo,datoBuscado) {
    //Recorrer el array desde la posición 0 hasta el final
    for (let index = 0; index < arreglo.length; index++) {
        console.log(`Paso ${index+1}: Revisando el valor ${arreglo[index]} en el índice ${index}`);
        
        //Comparar si el valor actual es el que buscamos
        if(arreglo[index] === datoBuscado){         
            return index;
        }
        console.log(`No se encontró el dato en el índice ${index}`);
    }
    // Todo el ciclo se ejecuta y no se encontró el dato, devolvemos -1
    return -1;
}

const datos = [15,8,42,23,4,16,50]
const resultado = busquedaLineal(datos,5);

if(resultado !== -1){
    console.log(`Dato encontrado en el índice: ${resultado}`);
}else{
    console.log("El dato buscado no se encuentra en el arreglo.")
}
