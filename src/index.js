const { ApolloServer } = require('apollo-server')
const { mergeTypeDefs } = require('graphql-tools')
const userSchema = require('./user/schema/user.graphql')
//const produtoSchema = require('./produto/schema/produto.graphql')

const userResolvers = require('./user/resolvers/userResolvers')
//const produtoResolvers = require('./user/resolvers/produtoResolvers')

//const typeDefs = mergeTypeDefs([userSchema, produtoSchema]);
//const resolvers = [userResolvers, produtoResolvers]

const typeDefs = mergeTypeDefs([userSchema]);
const resolvers = [userResolvers]

// para tornar publica basta colocar introspection e playground como true, como boa prática não deve ficar disponíveis em produção.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,  
  playground: false,
})

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})