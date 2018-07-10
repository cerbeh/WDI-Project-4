const router = require('express').Router();
const users = require('../controllers/users');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

router.post('/register', users.register);
router.post('/login', users.login);

router.get('/users', users.index);
router.get('/users/:id', users.show);

router.route('/users/:id/sessions')
  .post(secureRoute, sessions.create)
  .get(sessions.index);

router.route('/users/:id/sessions/:sessionId')
  .get(sessions.show)
  .put(secureRoute, sessions.update)
  .delete(secureRoute, sessions.delete);

module.exports = router;
