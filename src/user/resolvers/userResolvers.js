const { GraphQLScalarType } = require('graphql')

const userResolvers = {
  responseMessage: {
    __resolveType(obj, context, info) {
      return false
    },
  },
  RolesType: {
    Visualizador: "Visualizador",
    Tecnico: "Tecnico",
    Administrador: "Administrador",
    Mecanico: "Mecanico"
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Exemplo de como criar um tipo escalar customizado, nesse caso um DateTime. Todos os tipos escalares tem estas 5 propriedades internamente',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (literal) => new Date(literal.value)
  }),  
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    addUser: async (root, { user }, { dataSources }) => dataSources.usersAPI.addUser(user),
    updateUser: async (root, updUser, { dataSources }) => dataSources.usersAPI.updateUser(updUser),
    deleteUser: async (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
  }
}

module.exports = userResolvers