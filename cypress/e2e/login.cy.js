/// <reference types="Cypress" />

describe('Login test cases', () => {
    it('Go to gallery page', () => {
        cy.visit('')
    })

    it('Go to login page', () => {
        cy.get("a[href='/login']").click()
    })

    it('Login with valid credentials', () => {
        cy.get('#email').clear().type('danilo.todorovic@vivifyideas.com')
        cy.get('#password').clear().type('Password1')
        cy.get("button[type='submit']").click()
    })
    it('Logout', () => {
        // cy.get('a[role="button "]').click()
        cy.wait(1000)
        cy.get('[class="nav-link nav-buttons"]').eq(2).click()
    })
})