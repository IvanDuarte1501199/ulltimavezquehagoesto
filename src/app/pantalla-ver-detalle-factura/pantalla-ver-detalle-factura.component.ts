import { Component, OnInit } from '@angular/core';
import { FacturaRepoService } from '../servicios/factura-repo.service';
import { ItemRepoService } from '../servicios/item-repo.service';
import { factura } from '../modelo/factura';

@Component({
  selector: 'app-pantalla-ver-detalle-factura',
  templateUrl: './pantalla-ver-detalle-factura.component.html',
  styleUrls: ['./pantalla-ver-detalle-factura.component.css']
})
export class PantallaVerDetalleFacturaComponent implements OnInit {

  constructor(private _facturaRepoService: FacturaRepoService, private _itemRepoService: ItemRepoService) { }
  facturaMostrada: factura;
  ngOnInit() {
    this.facturaMostrada = this._facturaRepoService.facturaAVer(0);
    console.log(this.facturaMostrada.fecha);
  }

}
