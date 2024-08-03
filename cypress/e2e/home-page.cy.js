describe('Página de login', () => {
    let baseUrl = '';
    let tabTitle = 'AdoPet';

    beforeEach(() => {
        baseUrl = 'https://adopet-frontend-cypress.vercel.app/';

        cy.visit(baseUrl);
        cy.title().should('equal', tabTitle);
    });

    it('Deve ter o texto "Quem ama adota!" no html da página inicial', () => {
        cy.get("footer.footer p").contains("Quem ama adota!");
    });

    it('Deve ter o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” no html da página inicial', () => {
        cy.get(".initial p").contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!')
    });
});
