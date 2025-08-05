import { screen } from '@testing-library/react'
import { renderizaComProvider } from '../../../Utils/tests'
import Header from '..'
import { Titulo } from '../../Produto/styles'

describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
  renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header/>,{
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataforma: ['windows'],
              preco: 250.9,
              precoAntigo: 200,
              titulo:'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataforma: ['windows'],
              preco: 250.9,
              precoAntigo: 200,
              titulo:'Elden Ring'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
