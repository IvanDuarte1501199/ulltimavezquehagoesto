import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/modelo/item';
import { ItemRepoService } from 'src/app/servicios/item-repo.service';
import { ProductoRepoService } from 'src/app/servicios/producto-repo.service';
import { producto } from 'src/app/modelo/producto';
import { FacturaRepoService } from 'src/app/servicios/factura-repo.service';
import { factura } from 'src/app/modelo/factura';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.css']
})
export class ItemsFormComponent implements OnInit {

  nuevoItem: item = new item(0, '', 0, 0, 0, 0);
  edicion: boolean = false;
  listaProductos: producto[] = [];
  listaFacturas: factura[] = [];
  constructor(private _itemRepoService: ItemRepoService,
    private _productsRepoService: ProductoRepoService,
    private _facturaRepoSerice: FacturaRepoService) { }

  ngOnInit() {
    this.listaProductos = this._productsRepoService.devolverProductos();
    
  }

  grabarItem() {


    this._productsRepoService.getProductoById(this.nuevoItem.productoId)
      .subscribe(
        (pd) => {



          if (this.edicion) {
            this._itemRepoService.actualizarItem(this.nuevoItem)
              .subscribe(
                (response) => {
                  this.edicion = false;
                  this.nuevoItem = new item(0, '', 0, 0, 0, 0);
                  this._itemRepoService.getAllItems();
                }
              );
          } else {

            this._facturaRepoSerice.getAllFacturas();
            this.nuevoItem.facturaId = this._facturaRepoSerice.getIdUltimaFactura();

            this.nuevoItem.descripcion = pd.descripcion;
            this.nuevoItem.pu = pd.pu;
            this.nuevoItem.subtotal = this.nuevoItem.calcularSubtotal();
            this._itemRepoService.agregarItem(this.nuevoItem)
              .subscribe(
                (response) => {
                  console.log('se creo el item: ', response);
                  this.nuevoItem = new item(0, '', 0, 0, 0, 0);
                  this._itemRepoService.getAllItems();
                }
              );
          }
        }
      );


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
