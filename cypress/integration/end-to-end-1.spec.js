/// <reference types="Cypress" />

describe('End to end Test 1', () => {

	beforeEach(function(){
    cy.visit('https://www.binance.com/en')
  })
		it('Navigate to inner page', function () {
		cy.get(':nth-child(1) > .ReactVirtualized__Table__row > [aria-colindex="2"] > .c5epy9-12 > span').click()    // Click on first el containing 'Welcome'
		cy.wait(2000)
		cy.get('.iZAfsE > .ReactVirtualized__Table__headerColumn > .ReactVirtualized__Table__headerTruncatedText') // checking for the price table
		cy.get('.sc-1t2bpae-0 > form > .sc-62mpio-0') //checking for the graphs
		cy.get('#TabbedOrderFormsMargin-a-exchange > span')//checking for exchange tab
		cy.get('#TabbedOrderFormsMargin-a-margin > span') //checking for the margin tab
		cy.get('#FormRow-BUY-price') //get price form
		cy.get('[data-name="oco"] > :nth-child(1)') //stop limit input box

	})


})