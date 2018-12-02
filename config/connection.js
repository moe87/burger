var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "burger",

  // Your password
  password: "burger",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;
