const { jwtDecode } = require('jwt-decode');

class TokenService {
    static getToken() {
        return localStorage.getItem('token');
    }

    static getDecodedToken() {
        const token = this.getToken();
        return jwtDecode(token);
    }
}

describe('Api Adopet', () => {
    let apiUrl = 'https://adopet-api-i8qu.onrender.com/mensagem';
    let baseUrl = '';
    let tabTitle = 'AdoPet';
    let email = "test-wc@mail.com";
    let password = "Senha321";

    beforeEach(() => {
        baseUrl = 'https://adopet-frontend-cypress.vercel.app/';
        const routerConfig = { path: '/home', setTimeout: true, timeout: 6000 };

        cy.visit(baseUrl);
        cy.get('[data-test="login-button"]').click();
        cy.url().should('contain', '/login');
        cy.title().should('equal', tabTitle);
        cy.login(email, password);
        cy.checkRoutePath(routerConfig);
        cy.get('#root > main > header > nav > div > a.header__message').click()
    });

    it('Mensagens da API', () => {
        const token = TokenService.getToken();
        const userId = TokenService.getDecodedToken().sub;

        console.log('token: ', token);
        console.log('userId: ', userId)

        cy.request({
            method: 'GET',
            url: `${apiUrl}/${userId}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
        })
    })
});
