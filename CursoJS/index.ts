/* boolean */
let resultado: boolean = false;
let resultado2 = true;

/* string */
let cadena: string = 'Amistad';

/* number */
let enteros = 1;
let decimales = 23.45;
let hexadecimal = 0xab2245;
let octal = 0o01234567;
// console.log(octal);

let arregloHexadecimal: number[]= [] //arreglo dinámico
let arregloHexadecimalEstatico = [];

let persona = {
    nombre: "Milenca",
    edad: 18,
    trabajo: {
        modalidad: ""
    }
}

let resul: number = operacionSuma(4,5);

function operacionSuma (a:number, b:number): number{
    return a+b;
}

class Persona {
    private nombre: string = "Milenca";

}

arregloHexadecimal.forEach(element => {
    console.log(element);
    
});

arregloHexadecimalEstatico.forEach(element => {
    console.log(element);
    
});
// console.log(arregloHexadecimal.length);
;




