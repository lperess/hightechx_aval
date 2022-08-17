const { User } = require('../database/models');

class UserService {
  constructor(model = User) {
    this.model = model;
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
}

module.exports = UserService;
