import { Component, OnInit } from '@angular/core';
import { cliente } from '../../modelo/cliente';
import { ClienteRepoService } from '../../servicios/cliente-repo.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  nuevoCliente: cliente = new cliente('', '', '');
  edicion: boolean = false;

  constructor(private _clienteRepoService: ClienteRepoService) { }

  ngOnInit() {
  }

  grabarCliente() {
    if (this.edicion) {
      this._clienteRepoService.actualizarCliente(this.nuevoCliente)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevoCliente = new cliente('', '', '');
            this._clienteRepoService.getAllClientes();
          }
        );
    } else {
      this._clienteRepoService.agregarCliente(this.nuevoCliente)
        .subscribe((response) => {
          console.log('se creo el cliente: ', response);
          this.nuevoCliente = new cliente('', '', '');
          this._clienteRepoService.getAllClientes();

        });
    }
  }

  editarCliente(clienteId: number) {
    this._clienteRepoService.getClienteById(clienteId)
      .subscribe(
        (cli) => {
          this.nuevoCliente = cli;
          this.edicion = true;
        }
      );
  }
}
