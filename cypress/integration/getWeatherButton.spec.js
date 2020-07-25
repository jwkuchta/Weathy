import { apiKey } from '../../src/redux/actions'

describe('Get Weather Button', () => {

    it('Gets the weather data from API', () => {
        
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
        let city = 'Calama'
        let country = 'Chile'
        // test works when I input the apiKey directly into the url, but I am unable to import or use process.env
        cy.request(`${baseUrl}q=${city},${country}&appid=${apiKey}`)
        .then((response) => {
            expect(response.body).to.have.property('cod', 200)
        })
    })

})