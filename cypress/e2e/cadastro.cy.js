describe('Página de cadastro', () => {
    let baseUrl = 'https://adopet-frontend-cypress.vercel.app/';
    let tabTitle = 'AdoPet';

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('[data-test="register-button"]').click();
        cy.checkRoutePath({ path: '/cadastro' })
    });

    afterEach(() => {
        cy.title().should('equal', tabTitle);
    });

    it('Deve preencher os campos do formulário corretamente e cadastrar um novo usuário', () => {
        const user = {
            name: 'Teste Cadastro Wc',
            email: 'test-wc@mail.com',
            password: 'Senha321',
            confirmPassword: 'Senha321'
        };

        cy.cadastrar(user);
        cy.get("button[data-test='submit-button']").click();
    });

    it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
        cy.get("button[data-test='submit-button']").click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });
});
