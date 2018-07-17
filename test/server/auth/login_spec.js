/* global api, describe, it, beforeEach */

const User = require('../../../models/user');

const userData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('POST /register', () => {
  beforeEach(done => {
    User
      .remove({})
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .post('/api/register')
      .send(userData)
      .expect(200, done);
  });
});
