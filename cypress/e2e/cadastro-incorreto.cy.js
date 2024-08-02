describe('Página de cadastro', () => {
    const baseUrl = 'https://adopet-frontend-cypress.vercel.app/';

    it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.visit(baseUrl);
        cy.contains("a[data-test='register-button']", "Cadastrar").click();
        cy.get("button[data-test='submit-button']").click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });
});
