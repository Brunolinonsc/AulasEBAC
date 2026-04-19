import React from 'react'
import logo from './logo.svg'
import { GlobalCss, Container } from './styles'
import Header from './Components/Header'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
