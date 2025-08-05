import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/Carrinho'

import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function configuraStore(preloadedState?: PreloadedState<RootState>) {
  return configuraStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: () => any[]) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configuraStore>
