describe('Upload', () => {

    beforeEach(() => {
        cy.goHome()

        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/upload', 'Upload')
    })

    it('Deve anexar um doc', () => {
        cy.get('input[name="doc"]')
            .selectFile('cypress/fixtures/doc.pdf')
            .then(Element => {
                expect(Element[0].files[0].name).to.equal('doc.pdf')
            })
    })

    it.only('Deve anexar uma imagem', () => {
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/liga.jpg')
            .then(Element => {
                expect(Element[0].files[0].name).to.equal('liga.jpg')
            })
        cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src') //se possiu um atributo (imagem) atrelado ao upload (pré-visualização)
            .and('include', 'blob')
    })
})