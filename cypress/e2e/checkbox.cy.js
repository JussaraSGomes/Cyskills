describe('Checkbox', () => {
    beforeEach(() => {
        cy.goHome()

        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/checkbox', 'Checkbox')
    })

    it('Deve marcar as linguagens que usam Node.js', () => {

        cy.get('label[for="javascript"]')
            .click()

        cy.get('label[for="typescript"]')
            .click()

    })

    it('Deve marcar todas as opções', () => {

        const langs = ['javascript', 'python', 'rust', 'go', 'typescript'] //lista de dados 

        langs.forEach(lang => {
            cy.get(`label[for="${lang}"]`)
            .click()
        })
    })
})

