import { Injectable,} from '@angular/core';
import { Ingrediente } from 'src/shared/ingrediente.model';
import { Subject } from "rxjs";

@Injectable()
export class CompraListadoServicio {
    constructor(){}
actualizarIngredientes= new Subject<Ingrediente[]>()
editandoElemento= new  Subject<number>()
private ingrediente:Ingrediente[]=[
    new Ingrediente ('Manzana',5),
    new Ingrediente ('Tomates',10),
]

anadirIngrediente(nuevoIngrediente:Ingrediente){
    this.ingrediente.push(nuevoIngrediente)
    this.actualizarIngredientes.next(this.ingrediente)//Escuchamos los cambios en unar variable y la emitimos inmediatamente
}

extraerIngrediente(index:number){
return this.ingrediente[index]

}

extraerIngredientes(){
    return this.ingrediente.slice()
}

anadirVariosIngredientes(nuevosIngredientes:Ingrediente[]){//añadimos varios ingredientes al array ingrediente
//  for (const ingrediente of nuevosIngredientes) {
//      this.anadirIngrediente(ingrediente)
//  }

this.ingrediente.push(...nuevosIngredientes)//extrae los elementos del array nuevosIngredientes y los añade en forma de lista al array ingrediente
this.actualizarIngredientes.next(this.ingrediente.slice())
}

actualizarLosIngredientes(index:number, nuevoIngrediente:Ingrediente){
this.ingrediente[index]=nuevoIngrediente
this.actualizarIngredientes.next(this.ingrediente.slice())
}

eliminarIngrediente(index:number){

    this.ingrediente.splice(index,1)
    this.actualizarIngredientes.next(this.ingrediente.slice())
}

}

