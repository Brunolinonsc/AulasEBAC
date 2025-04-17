import { Card, LinkBotao } from './styles'
import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
//Se for utilizar o styled components junto com o arquivo do projeto, fazer isto antes do codigo.

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feira com vueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)
export default Projeto
