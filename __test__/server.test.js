'use strict'

const supertest = require("supertest");
const server = require("./../modules/general/server.js");
const request = supertest(server.app)

describe('/, get', () => {
    test('Server is alive', async () => {
        const res = await request.get('/')
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hey Mom!')
    });
});


