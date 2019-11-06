import { Injectable } from '@angular/core';
import { factura } from '../modelo/factura';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaRepoService {

  listadoFacturas: factura[] = [];
  constructor(private _httpClient: HttpClient) { }
  getAllFacturas() {
    this._httpClient.get<factura[]>('http://localhost:3000/facturas')
    .subscribe(
      (data) => this.listadoFacturas = data
    );
  }

  getFacturaById(facturaId: number) {
    return this._httpClient.get<factura>(`http://localhost:3000/facturas/${facturaId}`);
  }

  agregarFactura(nuevaFactura: factura) {
    return this._httpClient.post('http://localhost:3000/facturas', nuevaFactura);
  }

  borrarFactura(facturaId: number) {
    return this._httpClient.delete(`http://localhost:3000/facturas/${facturaId}`);
  }

  actualizarFactura(factura: factura){
    return this._httpClient.put(`http://localhost:3000/facturas/${factura.id}`, factura);
  }

  getIdUltimaFactura() {
    let maxId = -1;
    this.listadoFacturas.forEach(element => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
    return maxId;
  }
}
