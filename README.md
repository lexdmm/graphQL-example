# GraphQL-example
### Um breve exemplo para entender e estudar o funcionamento do GraphQL
O GraphQL é uma especificação para montar APIs utilizado para comunicar elas a qualquer tipo de fonte de dados.
Nao importa de onde os dados venham (banco ou objeto), o que importa é em como eles serão usados, e assim otimizar a relação entre front-end e back-end e também ajudar a fazer uma separação clara entre estrutura e comportamento.

O GraphQL tem sua própria linguagem, chamada de SDL, ou Schema Definition Language, linguagem de definição de schema. Isso porque é possível implementar o GraphQL em conjunto com qualquer outra linguagem.

## O que será necessário
installar o NodeJS

## Instalação
1 - Primeiro instalar as dependencia do projeto.
```sh
npm install
```
2 - Na sequência suba os serviços
```sh
npx json-server --watch api/data/dados.json
```
3 - Resources
```sh
http://localhost:3000/users
http://localhost:3000/roles
```
4 - Dependências - Como o GraphQL é uma especificação, para funcionar ele precisa de algumas ferramentas:
- apollo-server: ajuda a instanciar minhas querys SDL (queries graphQL) para uma instancia onde onde eu posso interagir com elas.
