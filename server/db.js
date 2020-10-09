const { Pool } = require("pg");

const pool = new Pool({
  user: "tonarx",
  password: "startdb",
  host: "localhost",
  port: 5432,
  database: "taskdb",
});

module.exports = pool;
