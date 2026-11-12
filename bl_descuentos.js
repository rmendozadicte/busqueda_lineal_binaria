function calcularTotalConCupon(cuponesActivos,cuponIngresado,montoCompra) {
    console.log(`Monto original de la compra: ${montoCompra.toFixed(2)}`);
    console.log(`Verificando el cupón ${cuponIngresado}`);

    for (let i = 0; i < cuponesActivos.length; i++) {
        let cupon = cuponesActivos[i];

        if(cupon.codigo.toUpperCase() === cuponIngresado.toUpperCase()){
            console.log(`Cupón valido y se aplicará el descuento`);

            let montoDescuento = montoCompra * (cupon.porcentaje/100);
            let montoFinal = montoCompra - montoDescuento;

            console.log(`Monto descontado: ${montoDescuento.toFixed(2)}`);
            console.log(`Monto total a pagar: ${montoFinal.toFixed(2)}`);
            
            return cupon;            
        }
    }

    console.log(`El cupón ${cuponIngresado} no existe o ha expirado`);
    return null;

}

const cuponesActivos = [
    { codigo: "BIENVENIDO" , porcentaje: 20 },
    { codigo: "VERANO2027" , porcentaje: 15},
    { codigo: "CYBER" , porcentaje: 30},
    { codigo: "NAVIDAD" , porcentaje: 25},
];

calcularTotalConCupon(cuponesActivos,"CYBER",125.126);