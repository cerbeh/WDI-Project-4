const router = require('express').Router();
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.get('/users', users.index);

router.route('/users/:id')
  .get(secureRoute, users.show);

router.post('/register', users.register);
router.post('/login', users.login);

module.exports = router;
