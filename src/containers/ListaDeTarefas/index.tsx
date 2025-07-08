import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Pagar aluguel',
    descricao: 'Pagar aluguel que esta vencendo',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Pagar internet',
    descricao: 'Não esquecer de pagar internet',
    prioridade: 'importante',
    status: 'concluída'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
