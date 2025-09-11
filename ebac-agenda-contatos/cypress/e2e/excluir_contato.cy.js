/// <reference types="cypress" />
describe('Testes para a pagina de candidatura' , () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve editar o contato', () => {
        cy.get('.delete').first().click()
    
        // cy.get('.alterar').click()

        // cy.on('window:alert', (conteudo) => {
        //     expect(conteudo).contain('Obrigado pela candidatura!')
        // })
        cy.screenshot('Exclusão do contato realizada.')
    })
})