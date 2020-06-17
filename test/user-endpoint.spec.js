const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');

describe('Cards Endpoint', () => {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => {
    return db.raw(
      `TRUNCATE
          users
          RESTART IDENTITY CASCADE`
    );
  });
  before('create test user', () => {
    return db.raw(
      `INSERT INTO users (username, password)
        VALUES ('Testing','Testing')`
    );
  });
  describe('/api/user/login', () => {
    it('retrieves user with username', () => {
      const userInfo = { userName: 'Testing', userPass: 'Testing' };

      return supertest(app).post('/api/user/login').send(userInfo).expect(200);
    });
  });
  describe('/api/user/register', () => {
    it('allows creation of a new user', () => {
      const newUser = { userName: 'NewTest', userPass: 'NewTest' };

      return supertest(app)
        .post('/api/user/register')
        .send(newUser)
        .expect(200);
    });
  });
});
