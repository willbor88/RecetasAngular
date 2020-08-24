import { Injectable ,} from '@angular/core';
import { Receta } from './recetas/reseta.model';
import { Ingrediente } from 'src/shared/ingrediente.model';
import { CompraListadoServicio } from './listado-compras/compras-listado.service';
import { Subject } from 'rxjs';


@Injectable()//Con  Injectable podemos iyectar otro servicio dentro de este


export class  RecetasServicio{
  reflejarcambios = new Subject<Receta[]>()
CambiosUnicaReceta=new Subject<Receta>()
private Ingrediente:Ingrediente[]=[

]
private receta:Receta[] =[]
constructor(private comprasListadoServicio: CompraListadoServicio){}

// private receta:Receta[]= [//Inicializar el array con un valor
//     new Receta('PIZZA NAPOLITANA',
//     'Masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda.',
//     'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg',
//     [new Ingrediente('Cebolla',2),
//     new Ingrediente('Jamon',4)
// ]),
//     new Receta('Carne a la plancha',
//     'La preparación de la carne depende mucho del gusto de cada uno, pero hay errores que nadie debe cometer si no quiere acabar masticando un filete duro o cocido',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqtLiHmWFxEu6eXhQAyXQuK29c-Xfz9jBy4s9o4Wr8Pn0alouB&usqp=CAU',
//     [new Ingrediente('Queso',2),
//     new Ingrediente('Papas',20),])
// ]

anadirReceta(nuevaReceta:Receta){

this.receta.push(nuevaReceta)
this.reflejarcambios.next(this.receta)

}

actualizarReceta(index:number, nuevaReceta){
  console.log(index)
    this.receta[index]= nuevaReceta  
this.reflejarcambios.next(this.receta.slice()) 
//console.log(this.receta.slice())

// this.receta.push(nuevaReceta)
// this.reflejarcambios.next(this.receta)

   

}

extraerUnicaReceta(index:number){
       //this.receta[index]
       console.log(this.receta[index])
      this.CambiosUnicaReceta.next(this.receta[index])
     
    
      //return  this.receta[index]
}
extraerUnicaReceta1(index:number){
  //console.log(this.receta[index])
  return this.receta[index]
  
  //this.CambiosUnicaReceta.next(this.receta[index])
   console.log(this.receta[index])
 //this.reflejarcambios.next(this.receta)
 // return  this.receta[index]
}


extraerReceta(){
  
  //Devulve el listado de recetas
    //Imprimir el componente receta usando el servicio
    //Nunca modificar el estado orinigal
    this.reflejarcambios.next(this.receta.slice())
    
   // console.log('extrallendo receta')
    //console.log(this.receta.slice())
return this.receta.slice()//Usamos el metodo slice en vacio  para generar una copia del array

}

//Pasandole data a otro servicion
anadirIngredientesaListaCompras(ingredientes:Ingrediente[]){
console.log(ingredientes)
    this.comprasListadoServicio.anadirVariosIngredientes(ingredientes)///Reenviamos el array de ingredientes al otro servicio para añadir varios ingredientes al estado
}

eliminarReceta(index:number){

this.receta.splice(index,1)
this.reflejarcambios.next(this.receta.slice())

}

sobrescribirRecetas(recetas:Receta[]){
   this.receta = recetas
   this.reflejarcambios.next(this.receta.slice())
   
}



}