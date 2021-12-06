// CLASE PRODUCTO
class Producto{
    // Contador
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    // GETTERS
    get nombreProducto(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    // SETTER
    set nombreProducto(nombre){
        this._nombre = nombre;
    }
    
    set precio(precio){
        this._precio = precio;
    }

    // TO STRING
    toString(){
        return `ID: ${this._idProducto} || Nombre: ${this._nombre} || Precio: ${this._precio}`; 
    }
}

// CLASE ORDEN
class Orden{
    static contadorOrden = 0;
    static contadorProductosAdd = 0;
    
    constructor(productos){
        this._productos = productos;
        this._idOrden = ++Orden.contadorOrden;
        Orden.contadorProductosAdd = 0;
    }

    // GETTERS
    get idOrden(){
        return this._idOrden
    }

    // SETTERS
    set agregarProducto(producto){
        if (this._contadorProductosAgg > 5){
            console.log('Has alcanzado el maximo de productos');
        }else{
            this._contadorProductosAgg = ++Orden.contadorProductosAdd;
            this._productos.push(producto);
        }
    }

    // FUNCIONES
    get calcularTotal(){
        let x;
        let total = 0;

        for (let x = 0; x < this._productos.length; x++) {
            total += this._productos[x].precio;
        }
        return total;
    }

    get mostarOrden(){
        let x;
        let datos = [];
        let total = 0;

        for (let x = 0; x < this._productos.length; x++) {
            datos.push(` |*****| ID: ${this._productos[x]._idProducto} | Nombre: ${this._productos[x]._nombre} | Precio: ${this._productos[x]._precio}`)
            total += this._productos[x].precio;
        }
        return `ORDEN No. ${this._idOrden} ${datos} || TOTAL PRECIO: ${total}`;
        // return this._productos.length;
        // return Orden.contadorProductosAdd;
    }
}


// DATOS CLASE PRODUCTO
let producto1 = new Producto('Queso', 20.00);
let producto2 = new Producto('Carne', 50.00);
let producto3 = new Producto('Tomate', 8.00);
let producto4 = new Producto('Leche', 18.50);
let producto5 = new Producto('Lechuga', 3.50);

// producto1.nombreProducto = 'Queso seco';
// console.log(producto1.nombreProducto)

// producto1.precio = 50;
// console.log(producto1.precio)

// console.log(producto1.idProducto)

// console.log(producto1.toString())

// DATOS CLASE ORDEN
let Orden1 = new Orden([])

Orden1.agregarProducto = producto1;
Orden1.agregarProducto = producto2;
Orden1.agregarProducto = producto1;
Orden1.agregarProducto = producto2;
Orden1.agregarProducto = producto1;


console.log(Orden1.mostarOrden)


let Orden2 = new Orden([])

Orden2.agregarProducto = producto4;
Orden2.agregarProducto = producto4;

console.log(Orden2.mostarOrden)


let Orden3 = new Orden([])

Orden3.agregarProducto = producto4;

console.log(Orden3.mostarOrden)