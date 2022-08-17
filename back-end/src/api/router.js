const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

const userController = new UserController();

router.get('/users', userController.findAll);
router.post('/users', userController.create);
router.put('/users', userController.update);

module.exports = router;
