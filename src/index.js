require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyparser = require('body-parser');
const db = require('./config/db');

app.use(bodyparser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

require('./routes/auth/auth')(app)
require('./routes/user/user')(app)
require('./routes/todos/todos')(app)
