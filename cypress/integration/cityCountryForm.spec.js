// this file was created for the blog post

describe('Form', () => {

    beforeEach(() => {
        cy.visit('/')
    })
  
    // 1. We have an HTML element of type form with a class 'city-country'.
    it('it has a country-city form', () => {
       cy.get('form').should('have.class', 'country-city')
    })

    // 2. The form has a "city" input element with a "City…" placeholder.
    it('has a city input field with placeholder', () => {
        cy.get('form').find('input#city').should('have.attr', 'placeholder', 'City...')
    })

    // 3. The form has a "country" input element with a "Country…" placeholder.
    it('has a ccountry input field with placeholder', () => {
        cy.get('form').find('input#country').should('have.attr', 'placeholder', 'Country...')
    })

    // 4. The form accepts "city" input.
    it('accepts city input', () => {
        const input = "Katowice"
        cy.get('#city')
            .type(input)
            .should('have.value', input)
    })

    // 5. The form accepts "country" input.
    it('accepts country input', () => {
        const input = "Poland"
        cy.get('#country')
            .type(input)
            .should('have.value', input)
    })

    // 6. We have a "Get Weather" button
    it("it has a 'Get Weather' button", () => {
        cy.get('form').find('button').should('have.text', 'Get Weather')
    })

    // 7. When the button is clicked, an HTTP request is made to the API 
    // with the "city" and "country" values previously captured.
    it('gets the weather data from API', () => {  
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
        let city = 'Calama'
        let country = 'Chile'
      // test works when I input the apiKey directly into the url, but I am unable to import or use process.env
        cy.request(`${baseUrl}q=${city},${country}&appid=${Cypress.env('api_key')}`)
        .then((response) => {
            expect(response.body).to.have.property('cod', 200)
            expect(response.body).to.have.property('name', city)
            expect(response.body).to.have.property('clouds')
            expect(response.body).to.have.property('main')
            expect(response.body).to.have.property('sys')
            expect(response.body).to.have.property('weather')
            expect(response.body).to.have.property('wind')
        })
    })
})