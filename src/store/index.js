import { configureStore } from '@reduxjs/toolkit';
import carrinhoReducer from './reducers/carrinho'; // Vamos criar este reducer em breve
import { api } from './services/api'; // Vamos criar este serviço em breve

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
