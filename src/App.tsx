import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstileGlobal from './styles'

function App() {
  return (
    <>
      <EstileGlobal />
      <Sidebar />
      <main>
        <Sobre />
        <section>Projetos</section>
      </main>
    </>
  )
}

export default App
