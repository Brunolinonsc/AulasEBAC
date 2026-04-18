import { createGlobalStyle } from 'styled-components'
const cores = {
  branca: '',
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
}
`
