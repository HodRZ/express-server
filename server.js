'use strict'

import express from 'express';
const app = express();

function radio(port) {
    app.listen(port, () => {
        console.log(`Diamond City Radio ${port}`)
    })
}

// module.exports = {
//     app: app,
//     radio: radio
// }
export { app, radio }