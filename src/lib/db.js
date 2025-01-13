// import mysqlPromise from "mysql2/promise.js";

import mysql2 from "mysql2/promise";

// const mysql2 = require("mysql2/promise");
// Create a connection pool
const pool = mysql2.createPool({
  connectionLimit: 10,
  port: 3306,
  host: "92.205.172.123",
  user: "dbuser_test",
  password: "R]3m=.5t}($B",
  database: "ndef_test",
});
exports.pool = pool;
//exports.connection = connection;

// Perform a query using arrow functions
// pool.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });
