import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';


export const ADD_INGREDIENT = 'ADD_INGREDIENT' //creamos una variable que deberia tener el mismo nombre del identificador
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const UPDATE_INGREDIENT='UPDATE_INGREDIENT'
export const DELETE_INGREDIENT='DELETE_INGREDIENT'
export const START_EDIT='START_EDIT'
export const STOP_EDIT='STOP_EDIT'

//Generamos el nombre de nuestra accion e implementamos la intervaz Action
//La interfaz Action puede tener dos propiedades:type y payload
export  class AddIngridient  implements Action{
readonly type= ADD_INGREDIENT //es el identificado da la accion, readonly no permite cambiar este tipo desde otro lugar

//Permite recibir un argumento publico desde otro componente
constructor(public payload:Ingredient){}
}
export  class AddIngridients  implements Action{
  readonly type= ADD_INGREDIENTS
  constructor(public payload:Ingredient[]){}//Estructura de datos (objeto-array)que se usada  para  actualizar un elemento del estado global
}

export  class UpdateIngredient  implements Action{
  readonly type= UPDATE_INGREDIENT
  constructor(public payload:{newIngredient: Ingredient}){}
}

export  class DeleteIngredient  implements Action{
  readonly type= DELETE_INGREDIENT

}


export  class StartEdit implements Action{
  readonly type= START_EDIT
  constructor(public payload:number){}
}

export  class StopEdit implements Action{
  readonly type= STOP_EDIT
  }

//Generamos un type con todos los tipos de acciones a realizar
export type shoppingListActionss=
|AddIngridient
|AddIngridients
|UpdateIngredient
|DeleteIngredient
|StartEdit
|StopEdit
