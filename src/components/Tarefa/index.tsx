import * as S from './style'
const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome Da Tarefa</S.Titulo>
    <S.Tag>Importante</S.Tag>
    <S.Tag>Pendentes</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)
export default Tarefa
