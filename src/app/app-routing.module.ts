import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { ListadoComprasComponent } from './listado-compras/listado-compras.component';
import { RecetaInicioComponent } from './recetas/receta-inicio/receta-inicio.component';
import { RecetasDetallesComponent } from './recetas/recetas-detalles/recetas-detalles.component';
import { RecetaEdicionComponent } from './recetas/receta-edicion/receta-edicion.component';
import { RecetasResolverService } from './recetas/recetas-resover.service';


const approutes: Routes = [
  {path:'', redirectTo:'/recetas',pathMatch:'full'},//Especifiar que si la ruta esta completamente en blanco
{path:'recetas',component:RecetasComponent,children:[
{path:'',component:RecetaInicioComponent},//SIn alguan ruta
{path:'nueva',component:RecetaEdicionComponent},//Primero cargar un componente sin parametros
{path:':id',component:RecetasDetallesComponent,resolve:[RecetasResolverService]},//
//Debemos cargar primero la recepcion de parametros
{path:':id/edicion',component:RecetaEdicionComponent,resolve:[RecetasResolverService]},//Resolver
//Podmos cargar el componente de las dos formas

]},
{path:'listado-compras',component:ListadoComprasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
