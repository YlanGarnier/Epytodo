const db = require('../../config/db');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.createuser = (res, email, password, firstname, username) => {
    db.execute('INSERT INTO user (email, password, name, firstname) VALUES (?,?,?,?)',
    [email, password, username, firstname], (err, results, fields) => {
        if (err) {
            res.send({msg:"Account already exists"});
            return;
        }
        const token = jwt.sign({id:results.insertId}, process.env.SECRET);
        res.send({token});
    });
}

exports.login = (res, email, password) => {
    db.query('SELECT * FROM user WHERE email = ?', [email], (err, results, fields) => {
        if (results.length == 0) {
            res.send({msg:"Not found"})
            return;
        }
        bcrypt.compare(password, results[0].password, (err) => {
            if (err) {
                res.send({msg:"Invalid Credentials"})
            }
            const token = jwt.sign({id:results[0].id}, process.env.SECRET);
            res.send({token});
        })
    });
}

exports.getuserinfo = (res, id) => {
    db.query('SELECT * FROM user WHERE id = ?', [id], (err, results, fields) => {
        if (err) {
            res.send({msg:"Internal server error"})
            return;
        }
        res.send(results);
    });
}

exports.updateuser = (res, id, email, password, username, firstname) => {
    db.query('UPDATE user SET email = ?, password = ?, name = ?, firstname = ? WHERE id = ?',
    [email, password, username, firstname, id], (err, results, fields) => {
        if (err) {
            res.send({msg:"Internal server error"})
            return;
        }
        res.send(results);
    })
}

exports.deleteuser = (res, id) => {
    db.execute('DELETE FROM user WHERE id = ?', [id], (err, results, fields) => {
        if (err) {
            res.send({msg:"Internal server error"})
            return;
        }
        res.send({msg:`Successfully deleted record number: ${id}`});
    })
}

exports.getusertasks = (res, id) => {
    db.query('SELECT * FROM todo WHERE user_id = ?', [id], (err, results, fields) => {
        if (err) {
            res.send({msg:"Internal server error"})
            return;
        }
        res.send(results);
    })
}