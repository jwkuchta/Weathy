describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })

    it('visits the app', () => {
        // baseUrl defined in cypress.json
        cy.visit('/')
    })

    it("should have the right initial state for fetching", function() {
      cy.window().its("store").invoke("getState").its('fetching').should('equal', false)
    })

    it("should have the right initial state for location", function() {
      cy.window().its("store").invoke("getState").its('location').should('equal', null)
    })

    it("should have the right initial state for weather", function() {
      cy.window().its("store").invoke("getState").its('weather').should('equal', null)
    })

    it("should have the right initial state for selected location", function() {
      cy.window().its("store").invoke("getState").its('selectedLocation').should('deep.equal', {city: null, country: null})
    })

})