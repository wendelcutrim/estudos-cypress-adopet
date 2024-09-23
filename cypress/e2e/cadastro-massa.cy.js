const usuarios = require('../fixtures/usuarios.json');

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    });

    usuarios.forEach((user) => {
        it('Deve preencher os campos do formulário corretamente e cadastrar um novo usuário', () => {
            cy.get('[data-test="input-name"').clear().type(user.name);
            cy.get('[data-test="input-email"').clear().type(user.email);
            cy.get('[data-test="input-password"').clear().type(user.password);
            cy.get('[data-test="input-confirmPassword"').clear().type(user.password);
            cy.get("button[data-test='submit-button']").click();
        });
    })
})
