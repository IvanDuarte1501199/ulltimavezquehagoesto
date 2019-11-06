export class item {

    id: number = 0;
    cantidad: number;
    descripcion: string;
    pu: number;
    IVA: number;
    subtotal: number;
    productoId: number;
    facturaId: number;

    constructor(cantidad: number, descripcion: string, pu: number,IVA: number,productoId: number, facturaId: number) {
        this.id = this.id++;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.pu = pu;
        this.IVA = IVA;
        this.productoId = productoId;
        this.facturaId = facturaId;
        this.subtotal = IVA * pu ;
    }

}