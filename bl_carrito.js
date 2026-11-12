function buscarEnCarrito(carrito, nombreProducto) {
    console.log(`Buscando ${nombreProducto} en el carrito de compras!`);
    
    for (let i = 0; i < carrito.length; i++) {
        console.log(`Revisando producto [${i}]: ${carrito[i].nombre}`);  
        
        if(carrito[i].nombre.toLowerCase() === nombreProducto.toLowerCase()){
            console.log(`Encontrado! El producto está en la posición ${i}`);
            return carrito[i];
        }
    }

    console.log(`El producto ${nombreProducto} no se encuentra en el carrito`);
    return null;
}

const cart = [
    { id: 101, nombre: "Teclado Mecanico", precio: 85 },
    { id: 102, nombre: "Mouse Gamer", precio: 45 },
    { id: 103, nombre: "Monitor", precio: 220 }, 
    { id: 104, nombre: "Auriculares", precio: 60}
];

buscarEnCarrito(cart,"monitor");