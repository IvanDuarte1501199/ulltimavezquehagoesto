import { Injectable } from '@angular/core';
import { item } from '../modelo/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemRepoService {

  listadoItems: item[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllItems() {
    this._httpClient.get<item[]>('http://localhost:3000/items')
    .subscribe(
      (data) => this.listadoItems = data
    );
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

  actualizarItem(item: item){
    return this._httpClient.put(`http://localhost:3000/items/${item.id}`, item);
  }
}
