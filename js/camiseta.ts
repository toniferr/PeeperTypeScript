//Interface
interface CamisetaBase {
    setColor(color);
    getColor();
}


//Clase (molde del objeto)
class Camiseta implements CamisetaBase {

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

var camiseta = new Camiseta("fdas", "fdas", "fdas", "fdas", 12);
console.log(camiseta);

