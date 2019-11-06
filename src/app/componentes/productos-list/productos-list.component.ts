import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/modelo/producto';
import { ProductoRepoService } from 'src/app/servicios/producto-repo.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productoSeleccionado: producto;

  constructor(private _productoRepoService: ProductoRepoService) { }

  ngOnInit() {
    this._productoRepoService.getAllProductos();
  }

  obtenerProducto(productoId: number) {
    this._productoRepoService.getProductoById(productoId)
    .subscribe(
      (prod) => this.productoSeleccionado = prod
    );
  }

  borrarProducto(productoId: number) {
    this._productoRepoService.borrarProducto(productoId)
      .subscribe((response) => {
        console.log('Se borro el producto', response);
        this._productoRepoService.getAllProductos();
      } );
  }
}
