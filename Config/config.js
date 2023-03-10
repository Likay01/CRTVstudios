require('dotenv').config();
const {createPool} = require('mysql');

let connection = createPool({
    host: process.env.DBhost,
    user: process.env.DBuser,
    password: process.env.DBpass,
    port: process.env.DBport,
    database: process.env.DBname,
    multipleStatements: true
});

module.exports = connection;