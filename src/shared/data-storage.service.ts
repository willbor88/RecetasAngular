import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecetasServicio } from 'src/app/recetas.servicios';
import { Receta } from 'src/app/recetas/reseta.model';
import { tap } from "rxjs/operators";
@Injectable({providedIn:'root'})//No necesita declaracion en el app-module.ts

export class DataStorageService{

constructor(private http:HttpClient,
 private   recetasServicio:RecetasServicio
    ){}



almacenarRecetas(){

    let recetas
 recetas= this.recetasServicio.extraerReceta()


//Creamos el objeto pasando la palabra "recetas" en firebase con la extencion .json
return this.http.put('https://angular-http-1f4ea.firebaseio.com/recetas.json', recetas).subscribe((respuesta)=>{
    console.log(respuesta)
})
 }


extraccionRecetas(){

    return this.http.get<Receta[]>('https://angular-http-1f4ea.firebaseio.com//recetas.json',)
     .pipe(
    // map((recetas)=>{//Este map es un filtro de rxjs
    //     //El segundo map() es el metodo de javascript:map()Llama a la función proporcionada una vez para cada elemento en una matriz, en orden, para realizar algo con cada elemento
    //     return recetas.map(receta=>{
    //         //Asegurarnos cuando no exista ningun ingredientes asignarlos como un array vacio para evitar errores de undefined
    //         //realizo una copia de los elementos y  si hay ingredientes los paso sino los asigno vacios
    //       return {...receta,ingredientes: receta.ingredientes ? receta.ingredientes: []}
    //     })
    // })
// tap():Ejecutar codigo como un efecto secundario al recibir data de un observable:para no recibir con subscribe la data
//Actualizamos el estado de las recetas en el servicio de recetas

    tap(recetas =>{
        this.recetasServicio.sobrescribirRecetas(recetas)
    })
     )


    // .subscribe((respuesta)=>{
    //    // console.log(respuesta)
    //    this.recetasServicio.sobrescribirRecetas(respuesta)
    // })

}

}





