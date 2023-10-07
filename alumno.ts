export class Alumno {
    private _nombres: string = "";
    public getNombres(): string {
        return this._nombres;
    }
    public setNombres(value: string) {
        this._nombres = value;
    }


    private _apellidos: string = "";
    public getApellidos(): string {
        return this._apellidos;
    }
    public setApellidos(value: string) {
        this._apellidos = value;
    }

    constructor(nombres:string, apellidos:string){
        this._nombres=nombres;
        this._apellidos=apellidos;
    }

    imprimir():string {
        return "Nombres: "+this.getNombres() + "\nApellidos: "+this.getApellidos();
    }
}

    // const persona = new Alumno("Neicer Ibrahin", "Vásquez Bermúdez");
    // console.log(persona.imprimir());
    
    