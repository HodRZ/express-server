'use strict'

import { } from 'dotenv/config'
import { radio, app } from './server.js'

radio(process.env.PORT || 3001)