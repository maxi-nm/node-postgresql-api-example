const pg = require("pg");
require("dotenv").config();

// ElephantSQL Connection
const conn = process.env.ELEPHANTSQL_URL;

// Localhost o Server connection
// const pool = new Pool({
//   host: process.env.POSTGRE_HOST,
//   base: process.env.POSTGRE_BASE,
//   port: process.env.POSTGRE_PORT,
//   user: process.env.POSTGRE_USER,
//   pass: process.env.POSTGRE_PASS,
// });

let client = new pg.Client(conn);

client.connect((err) => {
  if (err) {
    console.error("postgres connection error", err.stack);
  } else {
    console.log("postgres connected");
  }
});

// Example query
client.query('SELECT NOW() AS "theTime"', function (err, result) {
  if (err) {
    return console.error("error running query", err);
  }
  console.log(result.rows[0].theTime);
  client.end();
});
