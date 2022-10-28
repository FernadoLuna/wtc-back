// path: ./config/env/production/database.js

const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "ec2-54-160-200-167.compute-1.amazonaws.com",
      port: 5432,
      database: "d8gv921811a3g0",
      user: "bbbfslpohcnfnr",
      password:
        "440bf08cee5523fb88a0519c6212eae7ad9e92260f826c4e57c43ec0a7fc4482",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
