import { Injectable } from '@angular/core';
import { cliente } from '../modelo/cliente';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteRepoService {

  listadoClientes: cliente[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllClientes() {
    this._httpClient.get<cliente[]>('http://localhost:4000/api/clientes')
    .subscribe(
      (data) => this.listadoClientes = data
    );
  }
  devolverClientes() {
    this._httpClient.get<cliente[]>('http://localhost:4000/api/clientes')
    .subscribe(
      (data) => this.listadoClientes = data
    );
    return this.listadoClientes;
  }

  getClienteById(clienteId: number) {
    return this._httpClient.get<cliente>(`http://localhost:4000/api/clientes/${clienteId}`);
  }

  agregarCliente(nuevoCliente: cliente) {
    return this._httpClient.post('http://localhost:4000/api/clientes', nuevoCliente);
  }

  borrarCliente(clienteId: number) {
    return this._httpClient.delete(`http://localhost:4000/api/clientes/${clienteId}`);
  }

  actualizarCliente(cliente: cliente){
    return this._httpClient.put(`http://localhost:4000/api/clientes/${cliente.id}`, cliente);
  }
}
