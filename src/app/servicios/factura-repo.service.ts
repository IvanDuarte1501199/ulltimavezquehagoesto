import { Injectable } from '@angular/core';
import { factura } from '../modelo/factura';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaRepoService {

  listadoFacturas: factura[] = [];
  factura_a_ver: factura;
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

  actualizarFactura(factura: factura) {
    return this._httpClient.put(`http://localhost:3000/facturas/${factura.id}`, factura);
  }

  facturaAVer(facturaId: number) {
    if (facturaId != 0) {
      this._httpClient.get<factura>(`http://localhost:3000/facturas/${facturaId}`)
        .subscribe(
          (data) => this.factura_a_ver = data
        );
    } else {
      return this.factura_a_ver
    }
  }

  devolverFacturas() {
    this._httpClient.get<factura[]>('http://localhost:3000/facturas')
      .subscribe(
        (data) => this.listadoFacturas = data
      );
    return this.listadoFacturas;
  }


  getIdUltimaFactura() {
    let maxId = -1;
    this.getAllFacturas();
    for (let element of this.devolverFacturas()) {
      if (element.id > maxId) {
        maxId = element.id;
      }
    }
    /*
    this.listadoFacturas.forEach(element => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
    */
    return maxId;
  }
}
