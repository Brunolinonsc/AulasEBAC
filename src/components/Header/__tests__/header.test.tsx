import { render, screen } from '@testing-library/react'
import Header from '../index'
import { Provider } from 'react-redux'
import { store } from '../../../Store'
describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
