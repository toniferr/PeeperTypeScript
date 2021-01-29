type alfanumerico = string | number;

let cadena1: alfanumerico = 'personalizado';

//string
let cadena: string | number = "cadena";

//number
let numero: number = 12;

//boleano
let verdadero_falso: boolean = true;

//Any
let cualquiera: any = 'cualquier valor';
cualquiera = 77;

//Array
var lenguajes: Array<any> = ["php", "java", 11]

let years: any[] = [12,'trece',14,15];


//Let vs var
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10) {
    let numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2); //muestra 44 y 55
}
console.log(numero1, numero2); //muestra 10 y 55

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);