'use strict'

const supertest = require("supertest");
const server = require("./../modules/general/server.js");
const request = supertest(server.app)

const { handlePostUser } = require("./../modules/person/handlePostPerson.js")

describe('Express Server', () => {
    test('Server is running', async () => {
        const res = await request.get('/')
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hey Mom!')
    });
});


