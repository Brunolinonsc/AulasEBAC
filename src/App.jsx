import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/ReposList/indes";

function App() {
  const[formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);


  return(
    <>
    <Perfil nome="Bruno" endereco="https://github.com/Brunolinonsc.png"/>
    <ReposList/>
    
    {/* {formularioEstaVisivel && (
      <Formulario />
    )} */}

    {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
