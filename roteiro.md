# Cadastro

Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

-   O usuário acessa a página de cadastro.
-   O usuário preenche o campo "Nome".
-   O usuário preenche o campo "Email" com um endereço de e-mail válido.
-   O usuário preenche o campo "Senha" com uma senha válida.
-   O usuário preenche o campo "Confirmação de senha" com a mesma senha inserida no passo anterior.
-   O usuário clica no botão "Cadastrar".

Resultados esperados:

O sistema processa as informações fornecidas.

Regra de negócio:

E-mail e senha são campos obrigatórios para o cadastro.

# Exercicio

Com o Cypress, escreva os códigos dos seguintes testes:

Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
Visite a página de principal do AdoPet e teste os botões header;
Visite a página de /login do Adopet;
Visite a página de /home do Adopet;
Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.

# Exercio 2

Cenário: Falha na tentativa de cadastro

Passos:

O usuário acessa a página de cadastro.
O usuário deixa os campos obrigatórios (nome, email, senha e confirmação de senha) em branco.
O usuário clica no botão cadastrar.

Resultados esperados:

O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.

# Exercicio 3

Funcionalidade: Login no site Adopet

Cenário: Login no sistema com sucesso

Passos:

O usuário acessa a página de login.
O usuário insere seu email "test-wc@mail.com" e senha "Senha321" nos campos correspondentes.
O usuário clica no botão entrar.

Resultados esperados:

O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuário para a página "/home"

## Exercício 3.1

Funcionalidade: Login no site Adopet

Cenário: Falha no login do sistema

Passos:

O usuário acessa a página de login.
