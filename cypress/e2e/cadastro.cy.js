describe('Página de cadastro', () => {
    let baseUrl = 'https://adopet-frontend-cypress.vercel.app/';

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('[data-test="register-button"]').click();
        cy.url().should('contain', '/cadastro');
    })

    it('Deve preencher os campos do formulário corretamente e cadastrar um novo usuário', () => {
        cy.get("input[data-test='input-name']").type('Teste Cadastro Wc');
        cy.get("input[data-test='input-email']").type('test-wc@mail.com');
        cy.get("input[data-test='input-password']").type('Senha321');
        cy.get("input[data-test='input-confirm-password']").type('Senha321');
        cy.get("button[data-test='submit-button']").click();
    });

    it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.get("button[data-test='submit-button']").click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });
});
