/// <reference types="cypress" />
describe('Testes para a pagina de candidatura' , () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve editar o contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"]').type('Bruno lino nascimento')
        cy.get('input[placeholder="E-mail"]').type('Brunolino@lino.com')
        cy.get('input[placeholder="Telefone"]').type('55 99998888')
        // cy.get('input[name="endereco"]').type('rua 123 centro')
        // cy.get('#linux').check()
        // cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.alterar').click()

        // cy.on('window:alert', (conteudo) => {
        //     expect(conteudo).contain('Obrigado pela candidatura!')
        // })
        cy.screenshot('Alteração do contato realizada')
    })
})