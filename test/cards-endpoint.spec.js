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
          cards,
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
  before('create tag', () => {
    return db.raw(
      `INSERT INTO tags (tag)
        VALUES ('test')`
    );
  });
  before('create card', () => {
    return db.raw(
      `INSERT INTO cards (title, content, tags, tries, author)
            VALUES('Test', 'Test', '1', 1, 1)`
    );
  });

  describe('/api/cards', () => {
    it('retrieves all cards', () => {
      const replica = {
        id: 1,
        title: 'Test',
        content: 'Test',
        tags: 1,
        tries: 1,
        author: 1,
      };

      return supertest(app).get('/api/cards').expect(200, [replica]);
    });
    it('retrieves user cards', () => {
      const user = { id: 1 };
      return supertest(app).get('/api/cards').send(user).expect(200);
    });
    it('successfully updates tries for existing card and returns 204', () => {
      const reqFields = {
        id: 1,
        tries: 2,
      };
      return supertest(app).patch('/api/cards').send(reqFields).expect(204);
    });
    it('successfully delets a card and returns 204', () => {
      const deleteId = { id: 1 };
      return supertest(app).delete('/api/cards').send(deleteId).expect(204);
    });
    it('adds a new card and returns 201', () => {
      const newCard = {
        title: 'New',
        content: 'New',
        tags: 1,
        tries: 1,
        author: 1,
      };
      return supertest(app).post('/api/cards').send(newCard).expect(201);
    });
  });
});
