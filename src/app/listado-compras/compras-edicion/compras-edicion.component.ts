import { Component, OnInit, OnDestroy, ViewChild,} from '@angular/core';
import { Ingrediente } from 'src/shared/ingrediente.model';
import { CompraListadoServicio } from '../compras-listado.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-compras-edicion',
  templateUrl: './compras-edicion.component.html',
  styleUrls: ['./compras-edicion.component.css']
})
export class ComprasEdicionComponent implements OnInit, OnDestroy {
 @ViewChild('f')formulario:NgForm//Referenciamos al formulario
  subscripcion :Subscription
modoEdicion=false
indexElementEditado:number
elementoEditado:Ingrediente


  constructor(private comprasListadoServicio:CompraListadoServicio) { }

  ngOnInit(): void {

   this.subscripcion= this.comprasListadoServicio.editandoElemento.subscribe((index:number)=>{//Elemento pasado por el componente  listado-compras
    this.modoEdicion=true
    this.indexElementEditado=index
    this.elementoEditado= this.comprasListadoServicio.extraerIngrediente(index)
    this.formulario.setValue({//Cargamos a la vista  el elemento traido desde el servicio
      nombre:this.elementoEditado.nombre,
      cantidad:this.elementoEditado.cant
    })
    })
  }


 submit(form:NgForm){
    const valores=form.value
    const nuevoIngrediente= new Ingrediente(valores.nombre,valores.cantidad)
    if (this.modoEdicion) {
      this.comprasListadoServicio.actualizarLosIngredientes(this.indexElementEditado,nuevoIngrediente)
    }
    else{
      this.comprasListadoServicio.anadirIngrediente(nuevoIngrediente)
    }
  this.modoEdicion=false
  form.reset()
  }

  borrar(form:NgForm){
    const valores=form.value
    const nuevoIngrediente= new Ingrediente(valores.nombre,valores.cantidad)
    if (this.modoEdicion) {
      this.comprasListadoServicio.eliminarIngrediente(this.indexElementEditado)
    }
    else{
      this.comprasListadoServicio.anadirIngrediente(nuevoIngrediente)
    }


  }

limpiar(){

this.formulario.reset()//Borrar el objeto del formulario
this.modoEdicion=false
}

ngOnDestroy(){
  this.subscripcion.unsubscribe()
}

}
