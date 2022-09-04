'use strict'

function handlePostUser(req, res) {
    let { name, age, gender } = req.body
    age += 5
    try {
        res.send(age.toString())
    } catch (error) {
        console.log(error)
    }
}
module.exports = { handlePostUser }