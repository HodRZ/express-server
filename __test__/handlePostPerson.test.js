'use strict'

const supertest = require("supertest");
const server = require("./../modules/general/server.js");
const request = supertest(server.app)
// require("./../index.js")

describe("/Person, post", () => {
    test('post request to route delivers data, route handler changes data', async () => {
        const data = {
            "name": "Hod",
            "age": 5,
            "gender": "bicycle"
        }
        const res = await request
            .post('/person')
            .send(data)

        expect(res.text).toEqual('10')
    })
})

