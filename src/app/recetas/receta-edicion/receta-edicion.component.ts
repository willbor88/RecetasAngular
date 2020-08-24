import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { RecetasServicio } from 'src/app/recetas.servicios';
import { Router } from "@angular/router";
import { Receta } from '../reseta.model';



@Component({
  selector: 'app-receta-edicion',
  templateUrl: './receta-edicion.component.html',
  styleUrls: ['./receta-edicion.component.css']
})
export class RecetaEdicionComponent implements OnInit {
id:number
modoEdicion=false
recetaForm:FormGroup
 recetaIngredientes= new FormArray([])//Es un array que permite guardar elementos de tipo Control(input type)
  constructor(private route:ActivatedRoute,
   private recetaServicio:RecetasServicio,
   private router:Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{//Recibimos los parametro desde la url
      this.id= + data['id']
    // console.log(data)
    })

    this.route.data.subscribe((data)=>{//Recibimos la data desde el resolver
      this.modoEdicion = data['0'] != null
     
    })

    

    this.iniciarForm()
  }

submit(){
  //ACCEDER AL LOS VALORES DEL FORMGROUP
  //CREAR O INSTANCIAR UN OBJETO TIPO RECETA Y PASARLE VALORES
// const nuevaReceta= new Receta(
//   this.recetaForm.value['name'],
// this.recetaForm.value['imagePath'],
// this.recetaForm.value['descripcion'],
// this.recetaForm.value['ingredientess']
// )

//los cambios no se reflejan en el componente que los despliega solo con actuliar, debemos usar un observable tipo Subject para emitir los cambios
 if(this.modoEdicion)
 {
   //Podemos acceder a los valores del  objeto recetaForm usando value
   this.recetaServicio.actualizarReceta(this.id, this.recetaForm.value)//paso al servicio los valores del formGroup
   this.recetaServicio.extraerReceta()
   this.router.navigate(['../'], {relativeTo:this.route})
  
 }

 else{

  this.recetaServicio.anadirReceta( this.recetaForm.value)//paso al servicio los valores del formGroup
  this.router.navigate(['../'], {relativeTo:this.route})//Devolverme un nivel de mi posicion actual.(receta detalle)
 }

this.cancelar()
}

  private iniciarForm(){
    
    let nombreReceta=''
    let recetaImagePath=''
    let descripcion=''
  

if(this.modoEdicion){
  let receta
  this.route.data.subscribe((data)=>{
    receta = data['0']
       // console.log(data[0])
  })
    nombreReceta=receta.nombre
  recetaImagePath =receta.imagePath
  descripcion=receta.descripcion
//SI existen ingredientes creo los FormGroup y lo Formcontrol añada los valoes seguna la cantidad de elementos (receta.ingredientes)Array
  if(receta['ingredientess']){
        console.log(this.recetaIngredientes)
    for (const ingrediente of receta.ingredientess) {
      this.recetaIngredientes.push(
           new FormGroup({  //Añadimos cada formgroup y cada control de formulario
            'nombre': new FormControl(ingrediente.nombre,Validators.required),//Le damos un nombre y valor a cada control
          'cantidad': new FormControl(ingrediente.cantidad,[
            Validators.required,
            Validators.pattern('^[1-9]+[0-9]*$')
          ])
           })
      )
        }
  }

  else{
    this.añadirControl()
    console.log('no hay ingredientes')    
   // console.log(this.recetaIngredientes)
    
  }


}
//Vincular con "formControlName" los controles de la vista para LLenar todos los capos del formulario
this.recetaForm= new FormGroup({
'nombre': new FormControl(nombreReceta,Validators.required),
'imagePath': new FormControl(recetaImagePath,Validators.required),
'descripcion': new FormControl(descripcion,Validators.required),
'ingredientess': this.recetaIngredientes ///Igualamos el campo ingredientess a  el formArray(recetaIngredientes) que contine los elementos creados al formulario

})
  }

  anadirIngredientes(){
   //Añadiendo nuevos controles a la vista 
  (<FormArray>this.recetaForm.get('ingredientess')).push(
   new FormGroup({
    //Pasando parameros para validar, iniciamos en null para no cargar ningun valor en el input
'nombre':new FormControl(null,[Validators.required]),
'cantidad':new FormControl(null,[Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
  })
)
  }

//Crear un control nuevo
  añadirControl(){
    this.recetaIngredientes.push(//Añadimos un FormGroup al FormArray(recetaIngredientes)
    new FormGroup({ 
  'nombre':new FormControl(null,[Validators.required]),//Añadilos al FormGroup un elemento de tipo control(type="control")
  'cantidad':new FormControl(null,[Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    })
    )
  }

  cancelar(){

this.router.navigate(['../'], {relativeTo:this.route})
  }

  borraIngrediente(index:number){
 
(<FormArray>this.recetaForm.get('ingredientess')).removeAt(index )//Eliminar un elemento del array recetaForm

  }

}
