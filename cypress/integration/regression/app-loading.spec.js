/// <reference types="cypress" />

context('Test App loading', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	describe('Check Home page', () => {
		it('should render h1 with Hellow World text', () => {
			cy.get('h1').should('have.text', 'Hello World');
		});
	});
});
