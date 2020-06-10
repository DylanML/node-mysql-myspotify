const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '178.128.253.84',
    user: 'Marc',
    password: 'marc2020',
    database: 'SPOTIFY'
  });
}