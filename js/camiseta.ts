//Clase (molde del objeto)
class Camiseta {

    //Propiedades (caracteristicas)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    
    //Métodos (funcionaes o acciones del objeto)
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

var camiseta = new Camiseta("rojo", "mangal larga", "nike", "L", 14);
camiseta.setColor("Rojo");
//camiseta.getColor();


//var playera = new Camiseta("rojo", "mangal larga", "nike", "L", 14);
//playera.setColor("Azul");



console.log(camiseta);




