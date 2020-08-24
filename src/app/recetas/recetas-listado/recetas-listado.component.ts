import { Component, OnInit, OnDestroy,} from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
import { Receta } from '../reseta.model';
import { RecetasServicio } from "../../recetas.servicios";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recetas-listado',
  templateUrl: './recetas-listado.component.html',
  styleUrls: ['./recetas-listado.component.css']
})
export class RecetasListadoComponent implements OnInit,OnDestroy {
   recetas: Receta[]=[]
   subscription:Subscription

  constructor(private recetasServico:RecetasServicio,private router:Router,
    private route:ActivatedRoute)
    //router nos permite navegar
    //route permite acceder a toda la iformacion de nuestra ruta actual

   { }
  
  ngOnInit( ){

  
  this.subscription=  this.recetasServico.reflejarcambios.subscribe((recetaActulizadas:Receta[])=>{
    this.recetas= recetaActulizadas
  })
 // this.recetas = this.recetasServico.extraerReceta()
  this.recetasServico.extraerReceta()
  
 this.recetasServico.reflejarcambios.subscribe((recetas:Receta[])=>{
  this.recetas = recetas
 })
  }

  navegar(){
   // console.log(this.route)
    this.router.navigate(['nueva',],{relativeTo:this.route})
  }
  
  ngOnDestroy(){
this.subscription.unsubscribe()
  }

}
