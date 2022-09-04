'use strict'

const supertest = require("supertest");
const server = require("./../modules/general/server.js");
const request = supertest(server.app)
// require("./../index.js")

const { handlePostUser } = require("./../modules/person/handlePostPerson.js")

describe("Post Person Route", () => {
    test('Route is working', async () => {
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

