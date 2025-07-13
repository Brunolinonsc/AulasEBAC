import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}
const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar javascript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar'
    },
    {
      id: 2,
      descricao: 'Não esquecer de passar no mercado.',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Compras'
    },
    {
      id: 3,
      descricao: 'Efetuar a troca do oleo do motor do carro',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Compras para o carro'
    }
  ]
}
const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
