export class producto {
    
    id: number = 0;
    codigo: string;
    descripcion: string;
    pu: number;

    constructor(codigo: string, descripcion: string, pu: number) {
        this.id = this.id++;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.pu = pu;
    }
} 