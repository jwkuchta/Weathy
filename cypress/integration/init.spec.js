describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })

    it('visits the app', () => {
        // baseUrl defined in cypress.json
        cy.visit('/')
    })

})