const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '000000',
    user: '00000',
    password: '000000',
    database: ''
  });
}
