import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/modelo/item';
import { ItemRepoService } from 'src/app/servicios/item-repo.service';
import { ProductoRepoService } from 'src/app/servicios/producto-repo.service';
import { producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-items-form',
  templateUrl: './items-form.component.html',
  styleUrls: ['./items-form.component.css']
})
export class ItemsFormComponent implements OnInit {

  nuevoItem: item = new item(0, '', 0, 0, 0,0);
  edicion: boolean = false;
  listaProductos: producto[] = [];

  constructor(private _itemRepoService: ItemRepoService, 
    private _productsRepoService: ProductoRepoService) { }

  ngOnInit() {
    this.listaProductos = this._productsRepoService.devolverProductos();
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
