import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
`

const BotaoPerigo = styled(Botao)`
background-color: red
color: #fff
`
function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>Cancelar </Botao>
    </>
  )
}
export default Teste
