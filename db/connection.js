const util = require("util");
const mysql = require("mysql");

// const connection = mysql.createConnection("mysql://ws5x7diuuo01brdx:xjy8s605s32qz626@bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ejff16igwxg1atba");
var connection = mysql.createConnection({
    multipleStatements: true, 
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "current password",
    database: "employees"
  });
connection.connect();

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;










