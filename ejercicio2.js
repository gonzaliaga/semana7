class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    vender (cantidad) {
        if (this.stock >= cantidad){
            this.stock -= cantidad;
            console.log(`Se han vendido ${cantidad} unidades de ${this.nombre}.`);
        }else{
            console.log(`No hay suficiente stock de ${this.nombre}.`);
        }
        }
}

//uso de clase
const producto1 = new Producto("Camiseta", 20, 50);

producto1.vender(10);
producto1.vender(50); 