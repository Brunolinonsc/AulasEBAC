import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstileGlobal, { Container } from './styles'
import temaLight from './Temes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstileGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
