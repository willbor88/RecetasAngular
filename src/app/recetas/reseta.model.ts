import { Ingrediente } from "src/shared/ingrediente.model"

export class Receta{
public nombre:string
public descripcion:string
public imagePath:string
public ingredientes:Ingrediente[]

//El constructore se ejecuta al crear un nuvo objeto de esta clase
//Podemos generar nuevo objeto y pasar argumientos al constructor
constructor(nombre:string, descript:string,imgPath:string, ingredientes:Ingrediente[]){

this.nombre=nombre
this.descripcion=descript
this.imagePath=imgPath
this.ingredientes= ingredientes


}

}