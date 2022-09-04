'use strict'

const cors = require('cors')
const express = require('express');
const { handlePostUser } = require('../person/handlePostPerson');
const app = express();
app.use(express.json())
app.use(cors())

function radio(port) {
    app.listen(port, () => {
        console.log(`Diamond City Radio ${port}`)
    })
}

app.get('/', (req, res) => {
    res.status(200).send('Hey Mom!')
})

app.post('/person', handlePostUser)

module.exports = { app, radio }