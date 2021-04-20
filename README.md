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
2 - Dependências - Como o GraphQL é uma especificação, para funcionar ele precisa de algumas ferramentas:
- apollo-server: ajuda a instanciar as querys SDL para uma instancia onde eu posso interagir com elas.

## Executando
1 - Na sequência suba os serviços
```sh
npx json-server --watch api/data/dados.json
```

2 - Resources
```sh
http://localhost:3000/users
http://localhost:3000/roles
```

3 - Suba o projeto graphql
```sh
npm start
```
Vai subir na porta 4000 que é padrão do graphql, veja que ao acessar a url no browser o playground do graphql ficará disponível. Ali poderá consultar sua query e ver a documentação delas.
http://localhost:4000/

4 - Depois execute o comando abaixo para ver todos os types definidos na API
```sh
query {
    __schema {
        types {
            name
            kind
            fields {
                name
            }
        }
    }
}
```

ou o ponto de entrada da API
```sh
{
    __schema {
        queryType {
            name
        }
    }
}
```

## Data Sources
O servidor apollo tem vários data sources, o que usamos aqui foi o **apollo-datasource-rest** que pode ser visto nas dependencias.
No caso ele vai comunicar o serviço api fake que está disponível na porta 3000 através dos **resolvers**. 
Existem vários data sources para comunicar varios tipos de dados e não apenas serviços rest:
- Para SQL https://github.com/cvburgess/SQLDataSource
- Para MongoDB https://github.com/GraphQLGuide/apollo-datasource-mongodb/
- Para o GraphQL como fonte de dados https://github.com/poetic/apollo-datasource-graphql
- Vários tipos de DB https://www.apollographql.com/blog/a-deep-dive-on-apollo-data-sources/

## retornos
Nesse exemplo a queri não pode ser nula
```sh
type Query {
    users: [User]
}
```
Nesse caso a lista em si pode ser nula, mas não pode retornar itens nulos.
```sh
type Query {
    users: [User!]!
}
```