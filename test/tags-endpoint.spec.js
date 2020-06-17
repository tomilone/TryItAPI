const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');

describe('Tags Endpoint', () => {
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
        tags
        RESTART IDENTITY CASCADE`
    );
  });
  before('create tag', () => {
    return db.raw(`INSERT INTO tags (tag) VALUES('test')`);
  });
  describe('/api/tags', () => {
    it('retrieves all tags', () => {
      return supertest(app).get('/api/tags').expect(200);
    });
  });
});
