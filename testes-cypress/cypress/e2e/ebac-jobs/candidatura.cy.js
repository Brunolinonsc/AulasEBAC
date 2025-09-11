/// <reference types="cypress" />
describe('Testes para a pagina de candidatura' , () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e-bay.vercel.app/')
    })

    it('Deve renderizar 4 vagas', () => {
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    it('Deve levar o usuario ate o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscrição')
    })

    it('Deve prencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Bruno lino')
        cy.get('input[name="email"]').type('Bruno@lino.com')
        cy.get('input[name="telefone"]').type('123456789')
        cy.get('input[name="endereco"]').type('rua 123 centro')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
        cy.screenshot('tela-incrição-preenchido')
    })
})