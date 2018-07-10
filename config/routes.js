const router = require('express').Router();
const user = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.post('/register', user.register);
router.post('/login', user.login);

router.post('/users/:id/sessions',secureRoute, user.sessionCreate);

module.exports = router;
