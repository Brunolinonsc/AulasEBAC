import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Java',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar Python',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Assistir as aulas de paython no site da udemy',
      1
    ),
    new Tarefa(
      'Pagar Cartão de Credito',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Pagar a fatura do cartão de credito que vencera no dia 14/07/2025',
      1
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
