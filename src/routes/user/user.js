const crypt = require('bcryptjs');
const {getuserinfo, updateuser, deleteuser, getusertasks} = require('../user/user.query')
const middleware = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (app) => {
    app.get('/user', middleware, (req, res) => {
        const token = jwt.verify(req.headers.authorization, process.env.SECRET);
        getuserinfo(res, token.id)
    })
    app.get('/users/:id', middleware, (req, res) => {
        getuserinfo(res, req.params.id)
    })
    app.delete('/users/:id', middleware, (req, res) => {
        deleteuser(res, req.params.id)
    })
    app.put('/users/:id', middleware, (req, res) => {
        const email = req.body["email"]
        const password = req.body["password"]
        const firstname = req.body["firstname"]
        const username = req.body["name"]
        updateuser(res, req.params.id, email, password, username, firstname)
    })
    app.get('/user/todos', middleware, (req, res) => {
        const token = jwt.verify(req.headers.authorization, process.env.SECRET);
        getusertasks(res, token.id)
    })
}