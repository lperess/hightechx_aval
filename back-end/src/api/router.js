const { Router } = require('express');
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

const userController = new UserController();

router.get('/users', authMiddleware, userController.findAll);
router.post('/users', userController.create);
router.post('/login', userController.login);
router.put('/users', userController.update);
router.delete('/users/:id', userController.inactivate);

module.exports = router;
