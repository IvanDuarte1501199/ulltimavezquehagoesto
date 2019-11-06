import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/modelo/producto';
import { ProductoRepoService } from 'src/app/servicios/producto-repo.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  nuevoProducto: producto = new producto('', '', 0);
  edicion: boolean = false;

  constructor(private _productoRepoService: ProductoRepoService) { }

  ngOnInit() {
  }

  grabarProducto() {
    if(this.edicion) {
      this._productoRepoService.actualizarProducto(this.nuevoProducto)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevoProducto = new producto('', '', 0);
            this._productoRepoService.getAllProductos();
          }
        );
    } else {
      this._productoRepoService.agregarProducto(this.nuevoProducto)
        .subscribe((response) => {
          console.log('Se creo el producto: ', response);
          this.nuevoProducto = new producto('', '', 0);
          this._productoRepoService.getAllProductos();
        })
    }
  }

  editarProducto(productoId: number) {
    this._productoRepoService.getProductoById(productoId)
      .subscribe(
        (prod) => {
          this.nuevoProducto = prod;
          this.edicion = true;
          this._productoRepoService.getAllProductos();
        }
      )
  }
}
