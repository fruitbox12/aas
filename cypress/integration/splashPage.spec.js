/// <reference types="cypress" />

context('Splash Page', () => {
  before(() => {
    cy.visit('/')
  })

  it('checks that page title is Home', () => {
    // https://on.cypress.io/title
    cy.title().should('eq', 'Home')
  })

  it('checks that Using Cookies notification is rendered and closes', () => {
    cy.get('.makeStyles-root-4').should("exist")
    cy.get('.makeStyles-root-4 > .MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.makeStyles-root-4').should("not.exist")
  })

  /* it('checks that Settings Updated notification renders and closes when clicked', () => {
    // is there any other behavior we want to test for this? such as style changes
    cy.get('.makeStyles-root-6').should("exist")
    cy.get('.makeStyles-root-6 > .MuiBox-root > .MuiButton-text').click()
    cy.get('.makeStyles-root-6').should("not.exist")
  }) */

  it('checks that Nav Bar is rendered with proper links', () => {
    cy.get('#root > div > header > div > a:nth-child(1)').should('have.attr', 'href', '/')
    cy.get('#root > div > header > div > a:nth-child(3)').should('have.attr', 'href', 'https://github.com/zapproject/zap-ethereum-api')
    cy.get('#root > div > header > div > a:nth-child(4)').should('have.attr', 'href', 'https://tech.zap.org/')
    cy.get('#root > div > header > div > a:nth-child(5)').should('have.attr', 'href', 'https://github.com/zapproject')
    cy.get('#root > div > header > div > a:nth-child(6)').should('have.attr', 'href', 'https://medium.com/the-zap-project')
    cy.get('#root > div > header > div > a:nth-child(7)').should('have.attr', 'href', '#FQA')
  })

  /* it('checks that Resources are all rendered with proper links', () => {
    cy.get('.MuiBox-root-50 > .MuiBox-root > .MuiTypography-h4 > .MuiTypography-root').should('have.attr', 'href', 'https://github.com/zapproject/zap-ethereum-api')
    cy.get('.MuiBox-root-52 > .MuiBox-root > .MuiTypography-h4 > .MuiTypography-root').should('have.attr', 'href', 'https://tech.zap.org/')
    cy.get('.MuiBox-root-55 > .MuiBox-root > .MuiTypography-h4 > .MuiTypography-root').should('have.attr', 'href', 'https://github.com/zapproject')
  }) */
})
