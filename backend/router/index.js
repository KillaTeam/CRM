const UserController = require('../controllers/user-controller');

const Router = require('express').Router;
const router = new Router();

router.post('/dashboard', UserController.getUserData);

module.exports = router;