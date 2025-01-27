var mysql = require("mysql");

var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password", // Your MySQL root password
      database: "college", // Change from 'users' to 'himanshu'
});
module.exports = con;