import { Injectable, ɵConsole } from '@angular/core';
import { item } from '../modelo/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemRepoService {

  listadoItems: item[] = [];
  listaFiltrada: item[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllItems() {
    this._httpClient.get<item[]>('http://localhost:3000/items')
      .subscribe(
        (data) => this.listadoItems = data
      );
  }


  getListaFIltrada(id: number) {
    this._httpClient.get<item[]>('http://localhost:3000/items')
      .subscribe(
        (data) => {
          this.listaFiltrada = data.filter((x) => x.facturaId === id);
          console.log(this.listaFiltrada[0].descripcion);
          console.log(id);
        }
      );
    return this.listaFiltrada;
  }

  getItemById(itemId: number) {
    return this._httpClient.get<item>(`http://localhost:3000/items/${itemId}`);
  }

  agregarItem(nuevoItem: item) {
    return this._httpClient.post('http://localhost:3000/items', nuevoItem);
  }

  borrarItem(itemId: number) {
    return this._httpClient.delete(`http://localhost:3000/items/${itemId}`);
  }

  actualizarItem(item: item) {
    return this._httpClient.put(`http://localhost:3000/items/${item.id}`, item);
  }
}
