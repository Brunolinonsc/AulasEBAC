/// <reference types="cypress" />
describe('Testes para a pagina de candidatura' , () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        cy.get('input[name="nome"]').type('Bruno lino')
        cy.get('input[name="email"]').type('Bruno@lino.com')
        cy.get('input[name="telefone"]').type('123456789')
        // cy.get('input[name="endereco"]').type('rua 123 centro')
        // cy.get('#linux').check()
        // cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.adicionar').click()

        // cy.on('window:alert', (conteudo) => {
        //     expect(conteudo).contain('Obrigado pela candidatura!')
        // })
        cy.screenshot('Inclusao de contato preenchida')
    })
})