const { User } = require('../database/models');

class UserService {
  constructor(model = User) {
    this.model = model;
  }

  async findAll() {
    const modelResponse = await this.model.findAll();

    return modelResponse;
  }
}

module.exports = UserService;
