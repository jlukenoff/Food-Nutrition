const request = require('supertest');
const { server } = require('../server/index.js');
const { report: { foods } } = require('../server/food_data.json');

describe('GET /food', () => {
  test('should fetch all records with no params', (done) => {
    request(server)
      .get('/food')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.text).length).toEqual(foods.length);
        done();
      });
  });

  test('should return filtered results from a specified query', (done) => {
    request(server)
      .get('/food?203=&204=2-10&205=3-10&269=2-4')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.text).length).toEqual(9);
        done();
      });
  });

  test('should respond with 404 from an invalid path', (done) => {
    request(server)
      .get('/some/invalid/path')
      .expect(404)
      .end(done);
  });
});
