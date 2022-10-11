const UserController = require('../controllers/user-controller');
const EarningController = require('../controllers/eaning-controller');

const Router = require('express').Router;
const router = new Router();

router.get('/dashboard1', UserController.getUserData);
router.get('/dashboard', EarningController.getEarningData)

module.exports = router;