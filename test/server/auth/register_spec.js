/* global api, describe, it, expect, beforeEach */

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

  it('should create a new user object', done => {
    api
      .post('/api/register')
      .send(userData)
      .end(() => {
        User
          .findOne({ email: userData.email })
          .then(user => {
            expect(user).to.be.an('object');
            done();
          });
      });
  });

  it('should return a new user object', done => {
    api
      .post('api/register')
      .send(userData)
      .end((err, res) =>{
        expect(res.body.user._id).to.exist;
        done();
      });
  });
});
