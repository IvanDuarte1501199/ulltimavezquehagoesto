import { Component, OnInit } from '@angular/core';
import { factura } from 'src/app/modelo/factura';
import { FacturaRepoService } from 'src/app/servicios/factura-repo.service';
import { cliente } from 'src/app/modelo/cliente';
import { ClienteRepoService } from 'src/app/servicios/cliente-repo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-facturas-form',
  templateUrl: './facturas-form.component.html',
  styleUrls: ['./facturas-form.component.css']
})
export class FacturasFormComponent implements OnInit {

  nuevaFactura: factura = new factura('', 0, 0, 0);
  edicion: boolean = false;
  listaClientes: cliente[] = [];
  constructor(private _facturaRepoService: FacturaRepoService,
    private _clientesRepoService: ClienteRepoService) {
  }

  ngOnInit() {
    this.listaClientes = this._clientesRepoService.devolverClientes();
  }

  grabarFactura() {
    if (this.edicion) {
      this._facturaRepoService.actualizarFactura(this.nuevaFactura)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevaFactura = new factura('', 0, 0, 0);
          }
        );
    } else {
      this._facturaRepoService.agregarFactura(this.nuevaFactura)
        .subscribe(
          (response) => console.log('se creo la factura: ', response)
        );
        window.location.href = "/items"
    }
  }

  editarFactura(facturaId: number) {
    this._facturaRepoService.getFacturaById(facturaId)
      .subscribe(
        (cli) => {
          this.nuevaFactura = cli;
          this.edicion = true;
        }
      );
  }

}
