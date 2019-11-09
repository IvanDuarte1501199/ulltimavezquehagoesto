import { Component, OnInit } from '@angular/core';
import { factura } from 'src/app/modelo/factura';
import { FacturaRepoService } from 'src/app/servicios/factura-repo.service';
import { ClienteRepoService } from 'src/app/servicios/cliente-repo.service';
import { cliente } from 'src/app/modelo/cliente';
import { ItemRepoService } from 'src/app/servicios/item-repo.service';

@Component({
  selector: 'app-facturas-list',
  templateUrl: './facturas-list.component.html',
  styleUrls: ['./facturas-list.component.css']
})
export class FacturasListComponent implements OnInit {


  facturaSeleccionada: factura;
  clientePorId: cliente;
  mostrandoDetalle: boolean = false;

  constructor(private _facturaRepoService: FacturaRepoService, private _clienteRepoService: ClienteRepoService, private _itemRepoService: ItemRepoService) { }

  ngOnInit() {
    this._facturaRepoService.getAllFacturas();
  }
  obtenerCliente(clienteId: number) {
    this._clienteRepoService.getClienteById(clienteId)
      .subscribe(
        (fac) => this.clientePorId = fac
      );
    return this.clientePorId;
  }

  obtenerFactura(facturaId: number) {
    this._facturaRepoService.getFacturaById(facturaId)
      .subscribe(
        (fac) => {
        this.facturaSeleccionada = fac;
          console.log(this.facturaSeleccionada.clienteId);
        }
      );

  }

  borrarFactura(facturaId: number) {
    this._facturaRepoService.borrarFactura(facturaId)
      .subscribe(
        (response) => {
          console.log('se borro la factura ', response);
          this._facturaRepoService.getAllFacturas();
        }
      );
  }
  mostrarDetalle(facturaId: number) {
    this.mostrandoDetalle = true;
    this._facturaRepoService.getFacturaById(facturaId)
      .subscribe(
        (fac) => {
          this.facturaSeleccionada = fac;
        }
      );

    this._itemRepoService.getListaFIltrada(facturaId);


  }

}
