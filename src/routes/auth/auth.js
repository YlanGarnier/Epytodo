const crypt = require('bcryptjs');
const {createuser, login} = require('../user/user.query')
module.exports = (app) => {
    app.post('/login', (req, res) => {
        const email = req.body["email"]
        const password = req.body["password"]
        login(res, email, password)
    });
    app.post('/register', (req, res) => {
        const email = req.body["email"]
        const password = req.body["password"]
        const firstname = req.body["firstname"]
        const username = req.body["name"]
        const cryptedpasswd = crypt.hashSync(password, 12);
        createuser(res, email, cryptedpasswd, firstname, username);
    });
};