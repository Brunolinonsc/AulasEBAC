import { createSlice } from '@reduxjs/toolkit';

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: {
    itens: [],
  },
  reducers: {
    adicionarAoCarrinho: (state, action) => {
      const produto = action.payload;
      const produtoExistente = state.itens.find(item => item.id === produto.id);

      if (produtoExistente) {
        // Se o produto já existe, você pode aumentar a quantidade ou simplesmente ignorar
        // Por enquanto, vamos apenas adicionar se não existir para evitar duplicatas simples
      } else {
        state.itens.push(produto);
      }
    },
    removerDoCarrinho: (state, action) => {
      state.itens = state.itens.filter(item => item.id !== action.payload);
    },
    limparCarrinho: (state) => {
      state.itens = [];
    },
  },
});

export const { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
