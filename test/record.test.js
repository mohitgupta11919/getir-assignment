

var request = require('supertest');
var server = require('../index.js');

beforeAll(async () => {
    console.log('jest starting!');
});

// close the server after each test run
afterAll(() => {
    server.close();
    console.log('server closed!');
});

describe('basic route tests', () => {
    test('not allow GET /', async () => {
        const response = await request(server).get('/');
        expect(response.status).toEqual(405);
    });
});

describe('controller tests', () => {
    test('successful case (should return records)', async () => {
        const record = await request(server)
            .post('/api/search')
            .send({
                'startDate': '2016-01-26',
                'endDate': '2018-02-02',
                'minCount': '2700',
                'maxCount': '3000'
            });
        expect(record.body.code).toEqual(0);
        expect(record.body.msg).toBe('success');
        expect(record.statusCode).toBe(200);
    });

    test('invalid request case', async () => {
        const record = await request(server)
            .post('/api/search')
            .send({
                'startDate': '01-01-2020',
                'endDate': '01-01-2019',
                'minCount': '0',
                'maxCount': '500'
            });
        expect(record.body.code).toEqual(4);
        expect(record.body.msg).toBe('invalid start date');
        expect(record.statusCode).toBe(400);
    });
});