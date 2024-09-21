describe('Página de login', () => {
    let baseUrl = '';
    let tabTitle = 'AdoPet';
    let email = "test-wc@mail.com";
    let password = "Senha321";

    beforeEach(() => {
        baseUrl = 'https://adopet-frontend-cypress.vercel.app/';

        cy.visit(baseUrl);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('contain', '/login');
        cy.title().should('equal', tabTitle);
    });

    it('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {
        const routerConfig = { path: '/home', setTimeout: true, timeout: 6000 };

        cy.login(email, password);
        cy.checkRoutePath(routerConfig)
    });

    it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
        const email = 'marjorie3@';
        const password = '123';
        cy.login(email, password);
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')

    });

    it('Deve realizar login clicando no ícone de mensagem no header inserindo um email e senha válida', () => {
        const routerConfig = { path: '/home', setTimeout: true, timeout: 6000 };

        cy.get('.header .header__message').click();
        cy.url().should('contain', '/login');
        cy.login(email, password);
        cy.checkRoutePath(routerConfig)
    })
});
