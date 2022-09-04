'use strict'

require('dotenv').config()
const { radio, app } = require('./modules/general/server.js')
// const { handlePostUser } = require('./modules/person/handlePostPerson.js')

radio(process.env.PORT || 3001)


