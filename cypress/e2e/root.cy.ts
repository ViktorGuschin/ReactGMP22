describe('Navigate to root path', () => {
    it('choild redirect from / to /search', () => {
        cy.visit('http://localhost:8001/');
        cy.contains('search');
        cy.url().should('include', 'search?sortBy=genre');
    });
});
