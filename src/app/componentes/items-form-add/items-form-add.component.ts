import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/modelo/item';
import { producto } from 'src/app/modelo/producto';
import { ItemRepoService } from 'src/app/servicios/item-repo.service';
import { ProductoRepoService } from 'src/app/servicios/producto-repo.service';
import { FacturaRepoService } from 'src/app/servicios/factura-repo.service';
import { factura } from 'src/app/modelo/factura';

@Component({
  selector: 'app-items-form-add',
  templateUrl: './items-form-add.component.html',
  styleUrls: ['./items-form-add.component.css']
})
export class ItemsFormAddComponent implements OnInit {

  nuevoItem: item = new item(0, '', 0, 0, 0, 0);
  edicion: boolean = false;
  listaProductos: producto[] = [];
  idFactura: number;

  constructor(private _itemRepoService: ItemRepoService, 
    private _productsRepoService: ProductoRepoService,
    private _facturasRepoService: FacturaRepoService) { }

  
  cargarProductos() {
    this.listaProductos = this._productsRepoService.devolverProductos();
  }

  cargaId() {
    this.idFactura = this._facturasRepoService.getIdUltimaFactura();
  }

  ngOnInit() {
    this.cargarProductos();
    // FALTA CONTROLAR EL ASINCRONISMO
    this.cargaId();
  }

  grabarItem() {
    if (this.edicion) {
      this._itemRepoService.actualizarItem(this.nuevoItem)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevoItem = new item(0, '', 0, 0, 0, 0);
          }
        );
    } else {
      this._itemRepoService.agregarItem(this.nuevoItem)
        .subscribe(
          (response) => console.log('se creo el item: ', response)
        );
    }
  }

  editarItem(itemId: number) {
    this._itemRepoService.getItemById(itemId)
      .subscribe(
        (it) => {
          this.nuevoItem = it;
          this.edicion = true;
        }
      );
  }
}
