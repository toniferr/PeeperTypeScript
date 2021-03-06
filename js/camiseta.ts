//Interface
interface CamisetaBase {
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo);
        }
    }
}


//Clase (molde del objeto)
@estampar('Gucci')
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

//Clase hija
class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("fdas", "fdas", "fdas", "fdas", 12);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("rojo", "manga larga", "nike", "L", 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("gris");
console.log(sudadera_nike);