import * as fromShoppingList from "../shopping-list/store/shopping-list.reducer"
import * as fromAuth from '../auth/auth.reducer'
import { ActionReducerMap } from '@ngrx/store'

// importamos las estructuras de cada reducer y definimos la estructuro del objeto global
export interface AppState{
 shoppingList:fromShoppingList.State
  auth:fromAuth.State
}

//exportamos todos las funciones  reducer
export const appReducer:ActionReducerMap<AppState>={
 shoppingList:fromShoppingList.shoppingListReducer,
    auth:fromAuth.authReducer

}

