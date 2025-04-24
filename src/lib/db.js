// import mysqlPromise from "mysql2/promise.js";

import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const pool = mysql2.createPool({
  connectionLimit: 10,
  port: 3306,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

exports.pool = pool;

// Perform a query using arrow functions
// pool.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
//   if (error) throw error;
//   console.log("The solution is: ", results[0].solution);
// });
