import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/modelo/cliente';
import { ClienteRepoService } from 'src/app/servicios/cliente-repo.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clienteSeleccionado: cliente;

  constructor(private _clienteRepoService: ClienteRepoService) { }

  ngOnInit() {
    this._clienteRepoService.getAllClientes();
  }

  obtenerCliente(clienteId: number) {
    this._clienteRepoService.getClienteById(clienteId)
    .subscribe((cli) => {
      this.clienteSeleccionado = cli;
    });
  }

  borrarCliente(clienteId: number) {
    this._clienteRepoService.borrarCliente(clienteId)
    .subscribe((response) => {
      console.log('se borro el cliente ', response);
      this._clienteRepoService.getAllClientes();
    });
  }
}
