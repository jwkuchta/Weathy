describe('Get Weather Button', () => {

    let weatherData

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
            weatherData = response.body
        })
    })

    // it('Saves the fetched weather data in Redux store', () => {
    //     cy.visit('/')
    //     cy.window().its('store').invoke('getState').its('weather').should('deep.equal', {
    //         weather: weatherData.body,
    //         visibilityFilter: 'show_all'
    //     })
    // })
})

