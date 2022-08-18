const { User } = require('../database/models');
const { jwtGenerator } = require('../utils/auth');

class UserService {
  constructor(model = User) {
    this.model = model;
  }

  async login(email, password) {
    const user = await this.model.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return null;
    }

    const payload = {
      id: user.dataValues.id,
      email: user.dataValues.email,
      role: user.dataValues.role,
    };

    const token = jwtGenerator(payload);

    return token;
  }

  async findAll() {
    const modelResponse = await this.model.findAll();

    return modelResponse;
  }

  async create(user) {
    try {
      const modelResponse = await this.model.create(user);

      return modelResponse;
    } catch (error) {
      return error;
    }
  }

  async update(user) {
    let data = user;
    if (!user.birthday) {
      data = { ...data, birthday: null };
    }
    if (!user.tel) {
      data = { ...data, tel: null };
    }
    try {
      const modelResponse = await this.model.update(data, {
        where: { id: data.id },
      });

      return modelResponse;
    } catch (error) {
      return error;
    }
  }

  async inactivate(id) {
    try {
      const modelResponse = await this.model.update(
        {
          active: 0,
        },
        {
          where: { id },
        },
      );

      return modelResponse;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserService;
