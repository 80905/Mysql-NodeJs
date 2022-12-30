const app = require("./app");
// const mysql = require("mysql2");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// exports.pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });

app.listen(3033, () => {
  console.log("We are listening you on port : 3033 !!");
});
