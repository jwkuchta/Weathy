describe('Form', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('it has a country-city form', () => {
      cy.get('form').should('have.class', 'country-city')
    })

    it("it has a 'Get Weather' button", () => {
        cy.get('form').find('button').should('have.text', 'Get Weather')
    })

    it('has a city input field with placeholder', () => {
        cy.get('form').find('input#city').should('have.attr', 'placeholder', 'City...')
    })

    it('has a ccountry input field with placeholder', () => {
        cy.get('form').find('input#country').should('have.attr', 'placeholder', 'Country...')
    })

    it('accepts city input', () => {
        const input = "Katowice"
        cy.get('#city')
          .type(input)
          .should('have.value', input)
    })

    it('accepts country input', () => {
        const input = "Poland"
        cy.get('#country')
          .type(input)
          .should('have.value', input)
    })

})
