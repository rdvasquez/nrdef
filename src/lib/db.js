import mysql from "mysql";

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "92.205.172.123:3306",
  user: "dbuser_test",
  password: "Fgxsj}*JYjUu",
  database: "ndef_test",
});

exports.pool = pool;

// Perform a query using arrow functions
// pool.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });
