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

  async create(req, res) {
    try {
      const { user } = req.body;
      const serviceResponse = await this.service.create(user);

      return res.status(201).json(serviceResponse);
    } catch (error) {
      return res.status(404).json(error);
    }
  }
}

module.exports = UserController;
