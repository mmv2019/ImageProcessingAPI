"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../../index"));
describe('GET /api/imageAPI', function () {
    it('responds with 404 if called correctly but image does not exist', function (done) {
        (0, supertest_1.default)(index_1.default).get('/api/images?filename=test&height=100&width=100').expect(404, done);
    });
    it('responds with 200 if called correctly and image exist', function (done) {
        (0, supertest_1.default)(index_1.default).get('/api/images?filename=fjord&height=100&width=100').expect(200, done);
    });
});
