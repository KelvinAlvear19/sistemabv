export class Libro{ 
    _id?: string; 
    nombre: string; 
    descripcion: string 

    constructor(nombre: string, descripcion: string){ 
        this.nombre = nombre; 
        this.descripcion = descripcion; 
    }
}
