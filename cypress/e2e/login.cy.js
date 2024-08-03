describe('Página de login', () => {
    let baseUrl = '';
    let tabTitle = 'AdoPet';

    beforeEach(() => {
        baseUrl = 'https://adopet-frontend-cypress.vercel.app/';

        cy.visit(baseUrl);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('contain', '/login');
        cy.title().should('equal', tabTitle);
    });

    it('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {
        cy.get('[data-test="input-loginEmail"]').type("test-wc@mail.com");
        cy.get('[data-test="input-loginPassword"]').type("Senha321");
        cy.get('[data-test="submit-button"]').click();

        cy.url({ timeout: 60000 }).should('contain', '/home');
    });

    it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
        cy.get('[data-test="input-loginEmail"]').type('marjorie3');
        cy.get('[data-test="input-loginPassword"]').type('123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')

    });

    it('Deve realizar login cicando no ícone de mensagem no header inserindo um email e senha válida', () => {
        cy.get('.header .header__message').click();
        cy.url().should('contain', '/login');
        cy.get('[data-test="input-loginEmail"]').type("test-wc@mail.com");
        cy.get('[data-test="input-loginPassword"]').type("Senha321");
        cy.get('[data-test="submit-button"]').click();
        cy.url({ timeout: 60000 }).should('contain', '/home');
    })
});
