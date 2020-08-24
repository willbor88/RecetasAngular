import { Component, OnInit, Input, } from '@angular/core';
import { Receta } from '../../reseta.model';




@Component({
  selector: 'app-receta-elementos',
  templateUrl: './receta-elementos.component.html',
  styleUrls: ['./receta-elementos.component.css']
})
export class RecetaElementosComponent implements OnInit {
  @Input() receta: Receta//Esta reciendo cada elemento desde el componente padre
  @Input()index:number
  constructor() { }

  ngOnInit(): void {

    // console.log('receta elementos')
    // console.log(this.index)
  }
  
  }

 

