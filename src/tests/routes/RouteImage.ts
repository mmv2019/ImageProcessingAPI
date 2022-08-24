import request from 'supertest';

import app from '../../index';


describe('GET /api/imageAPI', () => {


    it('responds with 404 if called correctly but image does not exist', (done): void => {
        request(app).get('/api/images?filename=test&height=100&width=100').expect(404, done);
    });

    it('responds with 200 if called correctly and image exist', (done): void => {
        request(app).get('/api/images?filename=fjord&height=100&width=100').expect(200, done);
    });

  
});
