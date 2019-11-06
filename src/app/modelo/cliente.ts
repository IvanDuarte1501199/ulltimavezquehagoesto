export class cliente {

    id: number = 0;
    nombre: string;
    direccion: string;
    cuit: string;


    constructor(nombre: string, direccion: string, cuit: string) {
        this.id = this.id++;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cuit = cuit;

    }

}