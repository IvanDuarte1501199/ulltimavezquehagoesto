import { Component, OnInit } from '@angular/core';
import { factura } from 'src/app/modelo/factura';
import { FacturaRepoService } from 'src/app/servicios/factura-repo.service';
import { ClienteRepoService } from 'src/app/servicios/cliente-repo.service';
import { cliente } from 'src/app/modelo/cliente';

@Component({
  selector: 'app-facturas-list',
  templateUrl: './facturas-list.component.html',
  styleUrls: ['./facturas-list.component.css']
})
export class FacturasListComponent implements OnInit {

  
  facturaSeleccionada: factura;
  clientePorId: cliente;

  constructor(private _facturaRepoService: FacturaRepoService, private _clienteRepoService: ClienteRepoService) { }

  ngOnInit() {
    this._facturaRepoService.getAllFacturas();
  }
  obtenerCliente(clienteId: number) {
    this._clienteRepoService.getClienteById(clienteId)
    .subscribe(
      (fac) => this.clientePorId = fac
    );
    return this.clientePorId
  }

  obtenerFactura(facturaId: number) {
    this._facturaRepoService.getFacturaById(facturaId)
    .subscribe(
      (fac) => this.facturaSeleccionada = fac
    );
  }

  borrarFactura(facturaId: number) {
    this._facturaRepoService.borrarFactura(facturaId)
    .subscribe(
      (response) => console.log('se borro la factura ', response)
    );
  }
}
