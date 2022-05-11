const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err)
  process.exit(-1);
});

pool.on('connect', () => {
  //console.log('Base de Dados conectado com sucesso!')
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};