import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoRepoService {

  listadoProductos: producto[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllProductos() {
    this._httpClient.get<producto[]>('http://localhost:3000/productos')
    .subscribe(
      (data) => this.listadoProductos = data
    );
  }

  devolverProductos() {
    this._httpClient.get<producto[]>('http://localhost:3000/productos')
      .subscribe((data) => {
        this.listadoProductos = data;
      });
    return this.listadoProductos;
  }

  getProductoById(productoId: number) {
    return this._httpClient.get<producto>(`http://localhost:3000/productos/${productoId}`);
  }

  agregarProducto(nuevoProducto: producto) {
    return this._httpClient.post('http://localhost:3000/productos', nuevoProducto);
  }

  borrarProducto(productoId: number) {
    return this._httpClient.delete(`http://localhost:3000/productos/${productoId}`);
  }

  actualizarProducto(producto: producto) {
    return this._httpClient.put(`http://localhost:3000/productos/${producto.id}`, producto);
  }
}
