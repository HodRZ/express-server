'use strict'

function handlePostUser(req, res) {
    let { name, age, gender } = req.body
    const age5 = parseInt(age) + 5
    try {
        res.send(age5.toString())
    } catch (error) {
        console.log(error)
    }
}
module.exports = { handlePostUser }