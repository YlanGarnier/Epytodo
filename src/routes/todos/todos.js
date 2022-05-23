const {createtask, gettaskinfo, updatetask, deletetask } = require('../todos/todos.query')
const middleware = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (app) => {
    app.post('/todos', middleware, (req, res) => {
        const title = req.body["title"]
        const description = req.body["description"]
        const due_time = req.body["due_time"]
        const user_id = req.body["user_id"]
        const status = req.body["status"]
        createtask(res, title, description, due_time, user_id, status)
    })
    app.get('/todos', middleware, (req, res) => {
        const token = jwt.verify(req.headers.authorization, process.env.SECRET)
        gettaskinfo(res, token.id)
    })
    app.get('/todos/:id', middleware, (req, res) => {
        gettaskinfo(res, req.params.id)
    })
    app.delete('/todos/:id', middleware, (req, res) => {
        deletetask(res, req.params.id)
    })
    app.put('/todos/:id', middleware, (req, res) => {
        const title = req.body["title"]
        const description = req.body["description"]
        const due_time = req.body["due_time"]
        const user_id = req.body["user_id"]
        const status = req.body["status"]
        updatetask(res, req.params.id, title, description, due_time, user_id, status)
    })
}