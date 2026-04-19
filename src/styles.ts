import styled, { createGlobalStyle } from 'styled-components'
export const cores = {
  cabecalho: '#ebf5c2',
  bege: '#FFF8F2',
  cinza: '#333',
  preta: '#111',
  verde: '#10AC84'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
body {
  background-color: ${cores.bege};
  pading-top: 40px;
}
`
export const Container = styled.div`
  max-width: 1366px;
  height: 100%;
  margin: 0 auto;
`
