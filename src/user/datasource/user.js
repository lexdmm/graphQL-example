const { RESTDataSource } = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'http://localhost:3000'
    this.responseMessage = {
      code: 201,
      message: "operação feita com sucesso"
    }
  }

  async getUsers() {
    const users = await this.get('/users')
    return users.map(async user => ({
      id: user.id,
      nome: user.nome,
      email: user.email,
      ativo: user.ativo,
      createAt: user.createAt,
      updateAt: user.updateAt,
      role: await this.get(`/roles/${user.role}`)
    }))
  }

  async getUserById(id) {
    const user = await this.get(`/users/${id}`)
    user.role = await this.get(`/roles/${user.role}`)
    return user
  }

  async addUser(user) {
    const users = await this.get('/users')
    user.id = users.length + 1
    const role = await this.get(`roles?type=${user.role}`)
    await this.post('users', {...user, role: role[0].id})
    return ({
      ...user,
      role: role[0]
    })
  }

  async updateUser(updUser) {
    const role = await this.get(`roles?type=${updUser.user.role}`)
    await this.put(`users/${updUser.id}`, {...updUser.user, role: role[0].id })
    return ({
      ...this.responseMessage, updatedUser: {
        ...updUser.user,
        role: role[0]
      }
    })
  }

  async deleteUser(id) {
    await this.delete(`users/${id}`)
    return this.responseMessage
  }
}

module.exports = UsersAPI
