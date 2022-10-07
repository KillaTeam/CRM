const userController = require('../controllers/user-controller');

const Router = require('express').Router;
const router = new Router();

router.get('/dashboard', userController.get_user_data);

module.exports = router;