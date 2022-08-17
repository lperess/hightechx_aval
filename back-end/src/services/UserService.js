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
}

module.exports = UserService;
