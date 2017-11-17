// Import MySQL connection.
const connection = require('../config/connection');

// Object for all our SQL statement functions.
const orm = {
  listAll: function(tableInput, cb) {

    const queryString = `SELECT * FROM ${tableInput} ORDER BY updated_at DESC;`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateById: function(table, col, val, id, cb) {
    const queryString = `UPDATE ${table} SET ${col} = ${val} WHERE id=${id};`

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  create: function(table, col, val, cb) {
    var queryString = `INSERT INTO ${table} (${col}) VALUES ('${val}');`

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
