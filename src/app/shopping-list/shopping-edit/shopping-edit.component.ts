import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { Ingredient } from "../../shared/ingredient.model";
//import { ShoppingListService } from "../shopping-list.service";
import { Store } from "@ngrx/store";
//Importamos el Archivo Action
import * as ShoppingListActions from "../store/shopping-list.actions";
//import * as fromShoppindListActions from "../store/shopping-list.reducer";
import * as fromApp from '../../store/app.reducer'

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) slForm: NgForm;
  //@ViewChild('f', ) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor(
    //private slService: ShoppingListService,
    private store: Store<fromApp.AppState> ////Pasamos la estructura  o interfaz del objeto Store global
  ) {}

  ngOnInit() {
   this.subscription= this.store.select('shoppingList').subscribe(stateData=>{//Recordar que select devuelve un observable
      if (stateData.editedIngredientIndex>-1)
      {
        this.editMode= true
        this.editedItem = stateData.editedIngredient
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    })
      }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient({newIngredient,
        })
      );
    } else {
      // this.slService.addIngredient(newIngredient);
      //Despachar una Accion
      //Crear un nuevo objeto de la clase :AddIngridient
      this.store.dispatch(new ShoppingListActions.AddIngridient(newIngredient))//Declarar que tipo de dato que accederemos en el Store
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit)
  }

  onDelete() {
    //this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient()
    );
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit())//Cuando se cierre la pagina y esten editando un elemento del Store, se borren lo cambios realizados
  }
}
