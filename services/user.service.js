const { models } = require('./../libs/sequelize');
const bcrypt = require('bcrypt');

class UsersService {

  constructor(){
  }

  async create(data) {
    const hash = await bcrypt.hash(data.contrasena,10);
    const newUser = await models.User.create({
      ...data,
      contrasena:hash
    });
    delete newUser.dataValues.contrasena;
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll({
      include:['typeUser']
    });
    return rta;
  }

  async findOne(user) {
    const usuario = await models.User.findByPk(user,{
      include:['typeUser']
    });
    if(!usuario){
      throw boom.notFound('User not found');
    }
    return usuario;
  }

  async findConversation(user) {
    const usuario = await models.User.findByPk(user,{
      include:['typeUser','Conversation']
    });
    if(!usuario){
      throw boom.notFound('User not found');
    }
    return usuario;
  }

  async update(usuario, changes) {
    const user = await this.findOne(usuario);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(dni) {
    const user = await this.findOne(dni);
    await user.destroy();
    return{dni}
  }
}

module.exports = UsersService;
