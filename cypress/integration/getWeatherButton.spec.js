describe('Get Weather Button', () => {

    it('visits the app', () => {
        // baseUrl defined in cypress.json
        cy.visit('/')
    })

    let weatherData
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
    let city = 'Calama'
    let country = 'Chile'

    it('gets the weather data from API', () => {      
        // // test works when I input the apiKey directly into the url, but I am unable to import or use process.env
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

    it('saves data in Redux store', function() {
        cy.request(`${baseUrl}q=${city},${country}&appid=${Cypress.env('api_key')}`) 
        .then(resp => weatherData = resp.body)
        cy.window().its('store').then(store => store.dispatch({type: 'SET_WEATHER_DATA', payload: weatherData}))
        cy.window().its('store').invoke('getState').its('weather').should('deep.equal', weatherData)
    })

})


