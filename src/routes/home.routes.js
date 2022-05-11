const router = require('express-promise-router')();
const homeController = require('../controllers/home.controller');

router.get('/checkConnection', homeController.checkConnection);

module.exports = router;