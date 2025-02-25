/// <reference types="Cypress" />

describe('End to end Test 2', () => {

	beforeEach(function(){
    cy.visit('https://www.binance.com/en/trade/ETH_BTC')
  })
		it('Navigate to ETH/BTC page', function () {
			const price = cy.get('#FormRow-BUY-price').invoke('val')// 
			cy.get ('#FormRow-BUY-quantity').type("10") //putting a buy quantity
			const testCreditBalance = price * 10
			cy.get('#FormRow-BUY-total').invoke('val').should('eq', testCreditBalance) //asserting the calculated total price

	})


})