/// <reference types="cypress" />

context('Test App loading', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	describe('Check Home page', () => {
		it('should render body tag', () => {
			cy.get('body').should('be.visible');
		});
	});
});
