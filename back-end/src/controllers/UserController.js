const UserService = require('../services/UserService');

class UserController {
  constructor(service = new UserService()) {
    this.service = service;

    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.inactivate = this.inactivate.bind(this);
    this.login = this.login.bind(this);
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const serviceResponse = await this.service.login(email, password);

      if (!serviceResponse) {
        return res
          .status(404)
          .json({ message: 'Usuário não encontrado ou senha inválida' });
      }

      return res.status(200).json(serviceResponse);
    } catch (error) {
      return res.status(500).end();
    }
  }

  async findAll(_req, res) {
    try {
      const serviceResponse = await this.service.findAll();

      return res.status(200).json(serviceResponse);
    } catch (error) {
      return res.status(500).end();
    }
  }

  async create(req, res) {
    try {
      const { user } = req.body;
      const serviceResponse = await this.service.create(user);

      return res.status(201).json(serviceResponse);
    } catch (error) {
      return res.status(500).end();
    }
  }

  async update(req, res) {
    try {
      const { user } = req.body;
      const serviceResponse = await this.service.update(user);

      return res.status(200).json(serviceResponse);
    } catch (error) {
      return res.status(500).end();
    }
  }

  async inactivate(req, res) {
    try {
      const { id } = req.params;
      const serviceResponse = await this.service.inactivate(id);

      return res.status(200).json(serviceResponse);
    } catch (error) {
      return res.status(500).end();
    }
  }
}

module.exports = UserController;
