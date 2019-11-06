export class factura {

    id: number = 0;
    tipo: string;
    fecha: string;
    numero: number;
    ptoVenta: number;
    clienteId: number;
    total: number;


    constructor(tipo: string, numero: number, ptoVta: number, clienteId: number) {
        this.id = this.id++;
        this.tipo = tipo;
        this.fecha = new Date().toLocaleDateString();
        this.numero = numero;
        this.ptoVenta = ptoVta;
        this.clienteId = clienteId;
    }

}