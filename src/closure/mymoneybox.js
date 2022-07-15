// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money box: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`Money box: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

//experimento

function productos() {
    let agregarCarrito = [];
    
    function agregarProducto(producto) {
        let valorProducto = Number((Math.random()*10).toFixed(2));
        agregarCarrito.push({
            producto: producto,
            valor: valorProducto,
        });
    }

    function eliminarProducto(producto){
        const productoEliminado = agregarCarrito.find((value) => value.producto == producto);
        console.log(`Eliminaste '${productoEliminado.producto}' del carrito`);
        agregarCarrito.splice(agregarCarrito.findIndex(index => index.producto === producto), 1);
        total();
    }

    function mostrarProductos(){
        console.log(agregarCarrito.map((value) => `${value.producto}: $${value.valor}`));
    }

    function total(){
        let totalProductos = (agregarCarrito.reduce((sum, values) => sum + values.valor, 0)).toFixed(2);
        console.log(`El total del carrito es: $${totalProductos}`);
        console.log('');
    }

    return {
        agregarProducto,
        eliminarProducto,
        mostrarProductos,
        total,
    };
}

const carrito = productos();

carrito.agregarProducto('Galletas');
carrito.agregarProducto('Chocolate');
carrito.agregarProducto('Avena');
carrito.agregarProducto('Leche');
carrito.agregarProducto('Azúcar');
carrito.mostrarProductos();
carrito.total();

carrito.eliminarProducto('Chocolate');
carrito.eliminarProducto('Leche');
carrito.mostrarProductos();

carrito.agregarProducto('Arroz');
carrito.mostrarProductos();
carrito.total();