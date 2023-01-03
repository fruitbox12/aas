/// <reference types="cypress" />

context('New Oracle Wizard', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('I Agree').click()
    cy.contains('Dashboard').click()
    cy.get('#scroll-dialog-content').scrollTo('bottom')
    cy.contains('Accept').click()
  })

  it('loads oracle marketplace', () => {
    cy.contains('Oracle Marketplace').click()
    cy.contains('p', 'Oracle Marketplace')
  })
})