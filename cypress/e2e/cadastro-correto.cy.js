describe('Página de cadastro', () => {
    const baseUrl = 'https://adopet-frontend-cypress.vercel.app/';

    it('Deve preencher os campos do formulário corretamente e cadastrar um novo usuário', () => {
        cy.visit(baseUrl);
        cy.contains("a[data-test='register-button']", "Cadastrar").click();
        cy.get("input[data-test='input-name']").type('Teste Cadastro Wc');
        cy.get("input[data-test='input-email']").type('test-wc@mail.com');
        cy.get("input[data-test='input-password']").type('Senha321');
        cy.get("input[data-test='input-confirm-password']").type('Senha321');
        cy.get("button[data-test='submit-button']").click();
    });
});
