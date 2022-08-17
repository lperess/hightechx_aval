const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

const userController = new UserController();

router.get('/users', userController.findAll);

module.exports = router;
