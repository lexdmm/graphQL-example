const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    addUser: (root, user, { dataSources }) => dataSources.usersAPI.addUser(user),
    updateUser: (root, newUser, { dataSources }) => dataSources.usersAPI.updateUser(newUser)
  }
}

module.exports = userResolvers