var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost", // Replace with your host name
  user: "root", // Replace with your database username
  password: "Madnessregent12*", // Replace with your database password
  database: "stream", // // Replace with your database Name
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully!");
});
module.exports = connection;