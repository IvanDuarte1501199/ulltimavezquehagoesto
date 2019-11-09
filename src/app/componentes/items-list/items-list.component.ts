import { Component, OnInit } from '@angular/core';
import { ItemRepoService } from 'src/app/servicios/item-repo.service';
import { item } from 'src/app/modelo/item';
import { FacturaRepoService } from 'src/app/servicios/factura-repo.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  itemSeleccionado: item;


  constructor(private _itemRepoService: ItemRepoService, private _facturaRepoService: FacturaRepoService) {
    this._itemRepoService.getAllItems();
    this._facturaRepoService.getAllFacturas();
  }

  ngOnInit() {
    
  }

  

  obtenerItem(itemId: number) {
    this._itemRepoService.getItemById(itemId)
      .subscribe(
        (it) => this.itemSeleccionado = it
      );
  }

  borrarItem(itemId: number) {
    this._itemRepoService.borrarItem(itemId)
      .subscribe(
        (response) => {
          console.log('se borro el item ', response);
          this._itemRepoService.getAllItems();
          this._itemRepoService.getListaFIltrada(this._facturaRepoService.getIdUltimaFactura())
        }
      );
  }

}
