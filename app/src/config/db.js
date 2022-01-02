const mysql = require("mysql");

const db = mysql.createConnection({
    host: "jojo.ccj1hjmkncsb.ap-northeast-2.rds.amazonaws.com",
    user: "jossi",
    password: "jossi1223",
    database: "login",
});

db.connect();

module.exports= db;