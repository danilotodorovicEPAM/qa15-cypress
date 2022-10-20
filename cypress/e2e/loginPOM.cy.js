/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'

describe('Login test cases', () => {
    beforeEach('Go to gallery page and clcik on login button', () => {
        cy.visit('')
        navigation.clickOnLoginButton()
    })

    it('Login with valid credentials and logout', () => {
        loginPage.login('danilo.todorovic@vivifyideas.com', 'Password1')
        cy.wait(1000)
        navigation.clickOnLogoutButton()
    })

    it('Login with invalid email', () => {
        loginPage.login(faker.internet.email(), 'Password1')
    })

    it('Login with invalid password', () => {
        loginPage.login('danilo.todorovic@vivifyideas.com', faker.internet.password())
    })
           
   it('Login with invalid password', () => {
        loginPage.login('danilo.todorovic@vivifyideas.com', '123456')
    })
          
   it('Login with no password', () => {
        loginPage.login('danilo.todorovic@vivifyideas.com', "{backspace}")
    })
          
    it('Login with no email no password', () => {
        loginPage.login("{backspace}", "{backspace}")
    })    
})