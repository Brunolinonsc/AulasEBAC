function App() {
  const nome = "Bruno"

  function retornaNome(){
    return nome
  }

  const pessoa = {
    nome: "João"
  }

  let estaDeDia = false;

  return(
    <>
      <h1>Olá {pessoa.nome}</h1>
      <h2>Seu amigo é {retornaNome()}</h2>
      <h2>Este é o subtitulo</h2>
      {estaDeDia ? "Bom dia" : "Boa tarde"}
    </>
  )
}

export default App
