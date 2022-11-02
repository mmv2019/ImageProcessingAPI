import request from 'supertest';

import app from '../../index';


describe('GET /api/imageAPI', () => {


    it('responds with 404 if called correctly but image does not exist', (done): void => {
        request(app).get('/api/imageAPI?filename=test&height=100&width=100').expect(404, done);
    });

    it('responds with 200 if called correctly and image exist', (done): void => {
        request(app).get('/api/imageAPI?filename=santamonica&height=200&width=300').expect(200, done);
    });

    it('responds with 400 called with a missing parameter', (done): void => {
        request(app).get('/api/imageAPI?filename=test&height=100').expect(400, done);
    });

    it('responds with 400 called without parameters', (done): void => {
        request(app).get('/api/imageAPI').expect(400, done);
    });
});
