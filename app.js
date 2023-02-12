const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const sql = require('mssql');

const config = {
    user: 'user_name',
    password: 'password',
    server: 'server_name',
    database: 'database_name'
};

const Sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
    });

app.get('/employees', function(req, res) {
    sql.connect(config, function() {
        let request = new sql.Request();
        request.query('SELECT * FROM employees', function(err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});

app.get('/employees/:id', function(req, res) {
    sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`SELECT * FROM employees WHERE id = ${req.params.id}`, function(err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});

app.post('/employees', function(req, res) {
    sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`INSERT INTO employees (name, department, manager) VALUES ('${req.body.name}', '${req.body.department}', '${req.body.manager}')`, function(err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});

app.put('/employees/:id', function(req, res) {
    sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`UPDATE employees SET name = '${req.body.name}', department = '${req.body.department}', manager = '${req.body.manager}' WHERE id = ${req.params.id}`, function(err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});

app.delete('/employees/:id', function(req, res) {
    sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`DELETE FROM employees WHERE id = ${req.params.id}`, function(err, recordset) {
            if (err) console.log(err);
            res.send(recordset);
        });
    });
});
app.get('/departments', function(req, res) {
    sql.connect(config,function() {
        let request = new sql.Request();
        request.query('SELECT * FROM departments', function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
        
        app.get('/departments/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`SELECT * FROM departments WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
        
        app.post('/departments', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`INSERT INTO departments (name) VALUES (${req.body.name})`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
        
        app.put('/departments/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`UPDATE departments SET name = ${req.body.name} WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
        
        app.delete('/departments/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`DELETE FROM departments WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
        
        app.get('/managers', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query('SELECT * FROM managers', function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
        
        app.get('/managers/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`SELECT * FROM managers WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
        
        app.post('/managers', function(req, res) {// Connect to the SQL server and insert a new manager
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`INSERT INTO managers (first_name, last_name) VALUES ('${req.body.first_name}', '${req.body.last_name})`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
            
        app.put('/managers/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`UPDATE managers SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}' WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
            
        app.delete('/managers/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`DELETE FROM managers WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
            
        app.listen(port, function() {
        console.log(`Server is listening on port ${port}...`);
        });
            
        app.get('/employees', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`SELECT * FROM employees`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                
        app.get('/employees/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`SELECT * FROM employees WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                
        app.post('/employees', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`INSERT INTO employees (first_name, last_name, department_id, manager_id) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.department_id}', '${req.body.manager_id}')`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                
        app.put('/employees/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`UPDATE employees SET first_name = '${req.body.first_name}', last_name = '${req.body.last_name}', department_id = '${req.body.department_id}', manager_id = '${req.body.manager_id}' WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                
        app.delete('/employees/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`DELETE FROM employees WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                
    
                
        app.get('/departments', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`SELECT * FROM departments`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                    
        app.get('/departments/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`SELECT * FROM departments WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                    
        app.post('/departments', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`INSERT INTO departments (name) VALUES ('${req.body.name}')`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                    
        app.put('/departments/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`UPDATE departments SET name = '${req.body.name}' WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                    
        app.delete('/departments/:id', function(req, res) {
        sql.connect(config, function() {
        let request = new sql.Request();
        request.query(`DELETE FROM departments WHERE id = ${req.params.id}`, function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
        });
        });
        });
                    
        app.listen(3000, function() {
        console.log('Server is running on port 3000...');
        });

            module.exports = {runServer};