// CLASE PADRE RATON Y TECLADO
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    // getters
    get tipoEntrada(){
        return this._tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    // setters
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    set marca(marca){
        this._marca = marca;
    }
}

// CLASE RATON
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `ID Ratón: ${this._idRaton} || Marca: ${this._marca} || Tipo de entrada: ${this._tipoEntrada}`;
    }
}

let raton1 = new Raton('USB', 'Kingstong');
let raton2 = new Raton('USB', 'Kingstong');

// raton1.marca = 'Hyper'

console.log(raton1.toString());


// CLASE TECLADO
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `ID Teclado: ${this._idTeclado} || Marca: ${this._marca} || Tipo de entrada: ${this._tipoEntrada}`;
    }
}

let teclado1 = new Teclado('USB', 'Hyper');

console.log(teclado1.toString());


// CLASE MONITOR
class Monitor{
    static contadorMonitores = 0;
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    // getters
    get tipoEntrada(){
        return this._tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    // setters
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `ID Monitor: ${this._idMonitor} || Marca: ${this._marca} || Tipo de entrada: ${this._tipoEntrada}`;
    }
}

let monitor1 = new Monitor('HDMI', 'HP');
console.log(monitor1.toString())


class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, Monitor, Teclado, Raton){
        this._nombre = nombre;
        this._Monitor = Monitor;
        this._Teclado = Teclado;
        this._Raton = Raton;

        this.idComputadora = ++Computadora.contadorComputadoras;
    }

    // getters
    get nombre(){
        return this._nombre;
    }

    get Monitor(){
        return this._Monitor;
    }

    get Teclado(){
        return this._Teclado;
    }

    get Raton(){
        return this._Raton;
    }
    // setters
    set nombre(nombre){
        this._nombre = nombre;
    }

    set Monitor(Monitor){
        this._Monitor = Monitor;
    }

    set Teclado(Teclado){
        this._Teclado = Teclado;
    }

    set Raton(Raton){
        this._Raton = Raton;
    }

    toString(){
        return `Computadora: ${this.idComputadora} \n${this._Monitor} \n${this._Raton} \n${this._Teclado}\n`;
    }
}

let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);

let computadora2 = new Computadora('Toshiba', monitor1, teclado1, raton2);

console.log(computadora2.toString())

// CALSE ORDEN
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._computadoras = []
        this._idOrden = ++Orden.contadorOrdenes;
    }

    agregarComputadora(Computadora){
        this._computadoras.push(Computadora);
    }

    mostrarOrden(){
        return `Orden: ${this._idOrden} Computadoras: \n${this._computadoras}`;
    }

    // getters
    get computadoras(){
        return this._computadoras;
    }

    get id(){
        return this._idOrden;
    }

    // setters
    set computadoras(computadoras){
        this._computadoras = computadoras;
    }

    toString(){
        return `Orden: ${this._idOrden} Computadoras: \n${this._computadoras}`;
    }

}

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);

console.log(orden1.toString());