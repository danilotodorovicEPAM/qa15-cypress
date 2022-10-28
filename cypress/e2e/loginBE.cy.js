import { navigation } from '../page_objects/navigation'

var token;

describe('Login BE', () => {
    before('Login with BE', () => {
        // cy.loginBE('danilo.todorovic@vivifyideas.com', "Password1")
        // cy.loginBE(Cypress.env('validEmail'), Cypress.env('validPassword'))
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/login',
            body: {
                email: "danilo.todorovic@vivifyideas.com",
                password: "Password1"     
            }
        }).its('body').then(body => {
            console.log(body);
            // window.localStorage.setItem('token', response.access_token)
            token = body.access_token
        })
        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
        //     email: "danilo.todorovic@vivifyideas.com",
        //     password: "Password1"
        // }).its('body').then(body => {
        //     console.log(body);
        //     // window.localStorage.setItem('token', response.access_token)
        //     token = body.access_token
        // })
    })

    beforeEach('Set token in local storage', () => {
        window.localStorage.setItem('token', token)
    })

    it('Check if we are logged', () => {
        cy.visit('')
        navigation.logoutButton.should('exist')
    })

    it('Logout BE', () => {
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/logout',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    })

})