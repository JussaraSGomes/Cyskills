describe('Tags', () => {

    beforeEach(() => {
        cy.goHome()

        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/tags', 'Tags')
    })

    it('Deve adicionar algumas tags', () => {
        const tags = ['Cypress', 'JavaScript', 'Node.js']
        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{Enter}`)
                .should('have.value', '')
            cy.wait(500) //think time
        })

        tags.forEach(t => {
            cy.get('.tag-input')
                .should('contain', t)
        })

    })
})