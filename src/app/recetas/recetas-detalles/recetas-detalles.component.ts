import { Component, OnInit, OnChanges, } from '@angular/core';
import { Receta } from '../reseta.model';
import { RecetasServicio } from 'src/app/recetas.servicios';
import { ActivatedRoute ,Params,Router} from "@angular/router";

@Component({
  selector: 'app-recetas-detalles',
  templateUrl: './recetas-detalles.component.html',
  styleUrls: ['./recetas-detalles.component.css']
})
export class RecetasDetallesComponent implements OnInit {
recetaDetalle:Receta
id:any
mostrar=false

  constructor(private recetasServicio:RecetasServicio,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
       
    this.route.data.subscribe((data)=>{
        this.recetaDetalle= data[0]
      //console.log(data[0])
    })

    if(this.recetaDetalle){
      this.mostrar=true
    }
   
     
  }

  anadirListaCompras(){//pasamos los ingredientes seleccionados a otro servicio :asi podemos usar un servicio dentro de otro
    //Actulizamos la vista de  listado de compras desde este componente  pasando los ingredientes seleccionados
      this.recetasServicio.anadirIngredientesaListaCompras(this.recetaDetalle.ingredientes)//Pasamos  el array de ingredientes
//console.log(this.recetaDetalle.ingredientes)
  }

  editarReceta(){

 this.router.navigate(['edicion'],{relativeTo:this.route})//NO necesitamos pasar parametro pues ya lo pasamos desde el componente  receta-elementos
// this.router.navigate(['../',this.id,'edicion'],{relativeTo:this.route})  
}

borrarReceta(){

this.recetasServicio.eliminarReceta(this.id)
this.router.navigate(['recetas'])
}
// ngOnChanges(){
  
// }

}
