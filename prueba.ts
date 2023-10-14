// export class Prueba {
//   private examen: number;

//   constructor(examen: number) {
//     this.examen = examen;
//   }

//   comprobarNota() {}

//   static comprobarRespuestas(): boolean {
//     return false;
//   }

// }

import { Alumno } from "./alumno";
class Prueba {
  private _nota: number = 0;
  public getNota(): number {
    return this._nota;
  }
  public setNota(value: number) {
    this._nota = value;
  }

  private _alumno: Alumno;
  public getAlumno(): Alumno {
    return this._alumno;
  }
  public setAlumno(value: Alumno) {
    this._alumno = value;
  }

  constructor(nota: number, alumno: Alumno) {
    this._nota = nota;
    this._alumno = alumno;
  }

  imprimir(): string {
    return (
      "*****Alumno*****\n" +
      this.getAlumno().imprimir() +
      "\nNota: " +
      this.getNota()
    );
  }
}
const alumno = new Alumno("Neicer Ibrahin", "Vásquez Bermúdez");
const prueba = new Prueba(10, alumno);

console.log(prueba.imprimir());

let octal: number = 0o123;
console.log(octal);
