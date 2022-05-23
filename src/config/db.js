const sql = require ('mysql2')
require('dotenv').config()
const connect = sql.createConnection({host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE})

connect.connect((err) => {
    if (err)
        console.error('connection failed to the database')
    else
        console.log('connection to the database')
});

module.exports = connect;