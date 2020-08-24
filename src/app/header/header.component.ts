import { Component, OnInit, Input } from '@angular/core';
import { DataStorageService } from 'src/shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dataStorageService:DataStorageService ) { }

  ngOnInit(): void {
  }

  guardarReceta(){
this.dataStorageService.almacenarRecetas()


  }

  extraccionRecetas(){

    this.dataStorageService.extraccionRecetas().subscribe()
  }

 
}
