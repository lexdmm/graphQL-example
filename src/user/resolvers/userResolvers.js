const userResolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => {
      console.log(info)
      return dataSources.usersApi.getUsers()
    },
    usersById: (root, {id}, { dataSources }) => dataSources.usersApi.getUserById(id)
  } 
}

module.exports = userResolvers