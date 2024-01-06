# Aplicação React de Perfil e Repositórios do GitHub

Esta aplicação React foi desenvolvida para permitir aos usuários visualizar facilmente informações do perfil e uma lista de repositórios do GitHub. Abaixo estão os principais componentes da aplicação:

## Componente App

O componente `App` é o componente principal que gerencia o estado do nome de usuário (`nomeUsuario`). Ele inclui a renderização condicional dos componentes `Login`, `Perfil` e `ReposList` com base na entrada do usuário.

## Componente Login

O componente `Login` é responsável por capturar o nome de usuário do GitHub do usuário. Ele exibe um campo de entrada quando o comprimento do nome de usuário é zero.

## Componente Perfil

O componente `Perfil` exibe informações do perfil do usuário, incluindo o avatar, nome de usuário e fornece a capacidade de interagir com o perfil por meio de um campo de entrada.

## Componente ReposList

O componente `ReposList` busca e exibe a lista de repositórios do GitHub associados ao nome de usuário fornecido. Ele inclui um indicador de carregamento durante a busca de dados.

Se o nome de usuário fornecido não for válido, a aplicação apresentará uma mensagem indicando que o usuário é inválido. Nesse caso, sugere-se que o usuário revise o nome informado e tente novamente.

### Instruções de Uso

1. Abra a aplicação React em um ambiente de desenvolvimento.
2. Insira seu nome de usuário do GitHub no campo fornecido.
3. Após inserir um nome de usuário com mais de 4 caracteres, as informações do perfil e a lista de repositórios serão exibidas. Em caso de um nome de usuário inválido, a aplicação fornecerá uma mensagem de erro.

Esta aplicação é uma ferramenta simples para explorar o perfil e os repositórios do GitHub de um usuário de forma rápida e intuitiva. Sinta-se à vontade para personalizar e expandir conforme necessário para atender às suas necessidades específicas.
