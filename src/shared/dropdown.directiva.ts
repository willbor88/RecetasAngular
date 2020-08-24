import { Directive, HostListener,  HostBinding } from '@angular/core';

@Directive({
    selector: 'app-DropdownDirectiva',//Añadir una clase de boosttrap a un elemento html
})
export class DropdownDirectiva { 
   
    @HostBinding('class.open') abierto=false /////Definimos el atributo  que deseamos cambiar
//Definimos el estado inicial
       @HostListener('click') toggleOpen(){
           this.abierto = !this.abierto
           console.log('midirectiva')
       }
        
}


 