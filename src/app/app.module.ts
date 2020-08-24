import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetasListadoComponent } from './recetas/recetas-listado/recetas-listado.component';
import { RecetasDetallesComponent } from './recetas/recetas-detalles/recetas-detalles.component';
import { RecetaElementosComponent } from './recetas/recetas-detalles/receta-elementos/receta-elementos.component';
import { ListadoComprasComponent } from './listado-compras/listado-compras.component';
import { ComprasEdicionComponent } from './listado-compras/compras-edicion/compras-edicion.component';
import { DropdownDirectiva } from 'src/shared/dropdown.directiva';
import { CompraListadoServicio } from './listado-compras/compras-listado.service';
import { RecetasServicio } from './recetas.servicios';
import { RecetaInicioComponent } from './recetas/receta-inicio/receta-inicio.component';
import { RecetaEdicionComponent } from './recetas/receta-edicion/receta-edicion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    RecetasListadoComponent,
    RecetasDetallesComponent,
    RecetaElementosComponent,
    ListadoComprasComponent,
    ComprasEdicionComponent,
    DropdownDirectiva,
    RecetaInicioComponent,
    RecetaEdicionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [CompraListadoServicio,RecetasServicio ],//Podemos usar este servicio incluso en otros servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
