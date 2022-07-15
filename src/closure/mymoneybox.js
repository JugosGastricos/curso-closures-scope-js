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
        agregarCarrito.push(producto);
    }
    function eliminarProducto(producto){
        agregarCarrito.splice(agregarCarrito.findIndex((index) => index === producto), 1);
    }
    function mostrarProductos(){
        console.log(agregarCarrito);
    }
    return {
        agregarProducto,
        eliminarProducto,
        mostrarProductos,
    };
}

const carrito = productos();
carrito.agregarProducto('Galleta');
carrito.agregarProducto('Chocolate');
carrito.agregarProducto('Avena');
carrito.agregarProducto('Leche');
carrito.agregarProducto('Azúcar');
carrito.mostrarProductos();
carrito.eliminarProducto('Chocolate');
carrito.eliminarProducto('Leche');
carrito.mostrarProductos();