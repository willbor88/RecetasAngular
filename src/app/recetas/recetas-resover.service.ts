import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot,ActivatedRoute } from "@angular/router";
import { Receta } from './reseta.model';
import { DataStorageService } from 'src/shared/data-storage.service';
import { RecetasServicio } from '../recetas.servicios';
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class RecetasResolverService implements Resolve <Receta>{
//Resolver:Aseguara la cargar de data antes que la ruta se active para cargar el  componente
 recetas:Receta
constructor( private dataStorageService:DataStorageService, private  recetasService:RecetasServicio){}
id:any


//ASEGURAMOS QUE LA DATA ESTE DISPONIBLE ANTES QUE EL COMPONENTE(receta-detalle.component) SEA GARGADO
//Accedemos al estado actual de la ruta (route)para luego cambiar a un nuevo estado modificado,
  //pasando la data al otro componente con el  return, este encia la data a atraves de la ruta misma usadno (routnin)
  //Puedo acceder a mi data a traves del route del otro componete  usando snampshot.data asi : this.route.snapshot.data
  
resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
       //console.log('estoy en resolver')
    this.id = + route.params.id
    // console.log(route.params.id)
     
   this.recetas= this.recetasService.extraerUnicaReceta1(this.id)
   //console.log(this.recetas)
   if (this.recetas)
{

return  this.recetas
}
else{
   return null 
}

}

}