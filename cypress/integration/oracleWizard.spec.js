/// <reference types="cypress" />

context('New Oracle Wizard', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('I Agree').click()
    cy.contains('Dashboard').click()
    cy.get('#scroll-dialog-content').scrollTo('bottom')
    cy.contains('Accept').click()
    cy.contains('List a New Oracle').click()
    cy.wait(8000)
    cy.contains('h3', 'List A New Oracle Endpoint')
  })

  it('checks basic data entry', () => {
    cy.contains('div', 'Provider Title').find('input').first().type('Poloniex')
    cy.get('[hinttext="The name of the endpoint you are trying to make a bonding curve for"] > .MuiInputBase-root > .MuiInputBase-input').type('Poloniex Endpoint')
    cy.contains('Next').click()
    cy.contains('h2', 'Max Supply and Price')
    cy.contains('Next').click()
    cy.contains('h2', "Initialize Curve")
    //drag and drop provider curve
    cy.get('#svg').click()
    cy.window().then(win => {

      cy.get('[cx="130"]').trigger('mousedown', { which: 1, view: win, force: true })
        .trigger('mousemove', { clientX: 800, clientY: 500, view: win, force: true })
      cy.get('[cx="220"]').trigger('mouseup', { view: win, force: true })
    })
    cy.contains('Next').click()
    cy.contains('h2', "Markdown File")
    cy.contains('div', 'Link to Markdown file').find('input').first().type('https://gist.githubusercontent.com/gblmarquez/adaf8c4f18bc13fe3890/raw/1ebe25472e51b4b8111a28b7ec59e41827ebfa6c/install.sh')
    cy.get('h1').should('have.text', 'Sublime Text')
    cy.contains('Next').click()
    cy.contains('h2', "JSON Schema")
    cy.contains('div', 'Link to JSON Schema').find('input').first().type('https://gateway.ipfs.io/ipfs/QmaWPP9HFvWZceV8en2kisWdwZtrTo8ZfamEzkTuFg3PFr')
    cy.get('div').should('include.text', `"DaveBTC"`)
    cy.contains('Next').click()
    cy.contains('h2', 'Confirm Endpoint Listing')
    cy.contains('p', 'Provider: Poloniex')
    cy.contains('p', 'Endpoint: Poloniex Endpoint')
    cy.contains('p', 'Markdown File: https://gist.githubusercontent.com/gblmarquez/adaf8c4f18bc13fe3890/raw/1ebe25472e51b4b8111a28b7ec59e41827ebfa6c/install.sh')
    cy.contains('p', 'JSON Schema: https://gateway.ipfs.io/ipfs/QmaWPP9HFvWZceV8en2kisWdwZtrTo8ZfamEzkTuFg3PFr')
    cy.get('[data-cy="BondPrice"]').should('contain', '0 Zap')
    cy.get('[data-cy="DotLimit"]').should('contain', '9300 Dots')
    cy.get('[data-cy="CoeffArr"]').should('contain', '3, 0, 0.9944, -0.0001, 9300')
    cy.get('[data-cy="Next"]').click()
    cy.contains('span', 'Register Title').click()
    cy.wait(5000)
    cy.contains('span', 'List Curve').click()
    cy.wait(5000)
    cy.contains('span', 'Register Params').click()
    cy.wait(5000)
    cy.contains('span', 'Register Markdown Link').click()
    cy.wait(5000)
    cy.contains('span', 'Register JSON Link').click()
    cy.wait(5000)
    cy.contains('h4', 'Listing Complete!')
    cy.contains('span', 'Bond to Endpoint Poloniex Endpoint').click()
    cy.wait(5000)
    cy.contains('h3', 'Bond and Unbond Wizard')
  })

  /* it('Error handling', () => {
    cy.contains('Next').click()
    cy.contains('div', 'Provider title cannot be empty').should('have.css', 'color', 'rgb(230, 229, 232)')
    cy.contains('div', 'Endpoint name cannot be empty').should('have.css', 'color', 'rgb(230, 229, 232)')
    cy.contains('div', 'Provider Title').find('input').first().type('Poloniex')
    cy.get('[hinttext="The name of the endpoint you are trying to make a bonding curve for"] > .MuiInputBase-root > .MuiInputBase-input').type('Poloniex Endpoint')
    cy.contains('Next').click()
    
    cy.contains('Next').click()
    cy.contains('h2', "Initialize Curve")
    cy.get('[hinttext="The name of the endpoint you are trying to make a bonding curve for"] > .MuiInputBase-root > .MuiInputBase-input').type('Poloniex Endpoint')
    cy.get('.makeStyles-navbtns-218 > .MuiButtonBase-root').click()
    cy.get('[hinttext="Your name as a provider"] > .MuiInputBase-root > .MuiInputBase-input').type('Poloniex')
  }) */
})
