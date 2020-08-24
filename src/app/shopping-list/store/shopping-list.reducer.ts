import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

// Estrucura del Estado global
export interface State{
  ingredients:Ingredient[],
  editedIngredient:Ingredient,
  editedIngredientIndex:number
}

//Iniciamos el state con algunos valores
const initialState:State = {
  ingredients: [new Ingredient("Apples", 5),new Ingredient("Tomatoes", 20),new Ingredient("Queso", 4)],
  editedIngredient:null,//Asignamos valores no tipos de datos
  editedIngredientIndex:-1
};

//importamos las acciones del componente importado ShoppingListActions y el objeto type shoppingListActionss
export function shoppingListReducer(
  state :State = initialState,//Copiamos el estado global y lo definomos con una interfaz
  action: ShoppingListActions.shoppingListActionss
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {//Devolvemos un objeto porque actualizaremos un objeto del Store
        //Creo un objeto  copionado antes las propiedades  del state y lo modifico para retornarlo
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload], //Copiamos el array payload de la clase ADD_INGREDIENTS
      };

    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const UpdateIngredient = {
        //Actualizo solo un objeto ingrediente con los nuevas propiedades enviadas desde el Dispatch
        //...ingredient,
        ...action.payload.newIngredient, //Copio las propiedades del objeto  Ingrediente recibido desde la clase UpdateIngrediente y las añado al objeto UpdateIngredient
      };

      const UptdatIngredients = [...state.ingredients];
      UptdatIngredients[state.editedIngredientIndex] = UpdateIngredient;

      return {
        ...state,
        ingredients: UptdatIngredients,
        editedIngredientIndex:-1,//Detener la adicion
        editedIngredient:null//Detener la adicion
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      //   const index= action.payload

      // const deleteIngredients=[...state.ingredients].splice(index,1)
      //   return{
      //     ...state,
      //     ingredients:deleteIngredients

      //   }
      return {
        ...state,
        ingredients: state.ingredients.filter((ingred, idex) => {
          //Con filter recorremos toda el array y generamos un nuvevo array con los elementos que  retronen true, los elemtnso false no son incluidos
          return idex != state.editedIngredientIndex;
        }),
        editedIngredientIndex:-1,
        editedIngredient:null
      }

      case ShoppingListActions.START_EDIT:
    return  {
        ... state,
        editedIngredientIndex:action.payload,
        editedIngredient:{...state.ingredients[action.payload]}//NO actualizar directamente el array sino copiar las propiedades del objeto ingrediente:LOs objeto y array son elementos referenciado
      }
        case ShoppingListActions.STOP_EDIT:
          return{
            ...state,
            editedIngredientIndex:-1,
            editedIngredient:null
          }

    default:
      return state; //El retorn sera recibido por el Store
  }
}
