import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediente } from 'src/shared/ingrediente.model';
import { CompraListadoServicio } from './compras-listado.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado-compras.component.html',
  styleUrls: ['./listado-compras.component.css']
})
export class ListadoComprasComponent implements OnInit,OnDestroy {
ingredientes:Ingrediente[] =[]
private cambiosIngreSubject:Subscription
 

  constructor( private compraListadoServicio:CompraListadoServicio) { }

  ngOnInit(): void {
    this.ingredientes = this.compraListadoServicio.extraerIngredientes()
   this.cambiosIngreSubject=  this.compraListadoServicio.actualizarIngredientes.subscribe((NuevosIngre:Ingrediente[])=>{//Estamos escuchando los cambios del estado con el observable Subject
      this.ingredientes= NuevosIngre //Actulizamos la vista 
    })
  }

  editarElemento(index:number){

this.compraListadoServicio.editandoElemento.next(index)   
  }


 ngOnDestroy(){

  this.cambiosIngreSubject.unsubscribe()
 }

}
