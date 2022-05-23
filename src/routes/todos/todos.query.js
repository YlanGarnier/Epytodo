const db = require('../../config/db');
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.createtask = (res, title, description, due_time, user_id, status) => {
    db.execute('INSERT INTO todo (title, description, due_time, user_id, status) VALUES (?,?,?,?,?)',
    [title, description, due_time, user_id, status], (err, results, fields) => {
        if (err) {
            res.send({msg:"Task already exist"})
            return;
        }
        res.send(results);
    });
}

exports.gettaskinfo = (res, id) => {
    db.query('SELECT * FROM todo WHERE id = ?', [id], (err, results, fields) => {
        if (err) {
            res.send({msg:"Internal server error"})
            return;
        }
        res.send(results);
    });
}

exports.updatetask = (res, id, title, description, due_time, user_id, status) => {
    db.query('UPDATE todo SET title = ?, description = ?, due_time = ?, user_id = ?, status = ? WHERE id = ?',
    [title, description, due_time, user_id, status, id], (err, results, fields) => {
        if (err) {
            res.send({msg:"Internal server error"})
            return;
        }
        res.send(results);
    })
}

exports.deletetask = (res, id) => {
    db.execute('DELETE FROM todo WHERE id = ?', [id], (err, results, fields) => {
        if (err) {
            res.send({msg:"Internal server error"})
            return;
        }
        res.send({msg:`Successfully deleted record number: ${id}`});
    })
}
