const UserService = require('../services/UserService');

class UserController {
  constructor(service = new UserService()) {
    this.service = service;

    this.findAll = this.findAll.bind(this);
  }

  async findAll(_req, res, next) {
    try {
      const serviceResponse = await this.service.findAll();

      return res.status(200).json(serviceResponse);
    } catch (e) {
      next(e);
      return null;
    }
  }
}

module.exports = UserController;
