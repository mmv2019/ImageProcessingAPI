import request from 'supertest';
import app from '../../index';

describe('GET /api/listImagesAPI', (): void => {
    it('responds with 200', (done): void => {
        request(app).get('/api/listImagesAPI').expect(200, done);
    });
});
