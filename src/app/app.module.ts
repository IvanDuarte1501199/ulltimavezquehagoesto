import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientesFormComponent } from './componentes/clientes-form/clientes-form.component';
import { ClientesListComponent } from './componentes/clientes-list/clientes-list.component';
import { ProductosListComponent } from './componentes/productos-list/productos-list.component';
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { FacturasFormComponent } from './componentes/facturas-form/facturas-form.component';
import { FacturasListComponent } from './componentes/facturas-list/facturas-list.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { ItemsListComponent } from './componentes/items-list/items-list.component';
import { ItemsFormComponent } from './componentes/items-form/items-form.component';
import { FacturasFormAddComponent } from './componentes/facturas-form-add/facturas-form-add.component';
import { ItemsFormAddComponent } from './componentes/items-form-add/items-form-add.component';

const rutas: Routes = [
  {path: 'clientes', component: ClientesListComponent },
  {path: 'productos', component: ProductosListComponent },
  {path: 'facturas', component: FacturasListComponent },
  {path: 'facturas-form', component: FacturasFormComponent },
  {path: 'facturas-form-add', component: FacturasFormAddComponent },
  {path: 'items', component: ItemsListComponent },
  {path: '', component: PantallaPrincipalComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ClientesFormComponent,
    ClientesListComponent,
    ProductosListComponent,
    ProductosFormComponent,
    FacturasFormComponent,
    FacturasListComponent,
    PantallaPrincipalComponent,
    ItemsListComponent,
    ItemsFormComponent,
    FacturasFormAddComponent,
    ItemsFormAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
