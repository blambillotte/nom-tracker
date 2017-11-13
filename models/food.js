// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const food = {
  listAll: function(cb) {
    orm.listAll('food', function(res) {
      cb(res);
    });
  },
  create: function(val, cb) {
    orm.create('food', 'description', val, function(res) {
      cb(res);
    });
  },
  update: function(col, val, id, cb) {
    orm.updateById('food', col, val, id, function(res) {
      cb(res);
    });
  },
  // delete: function(id, cb) {
  //   orm.deleteById('cats', id, function(res) {
  //     cb(res);
  //   })
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = food;
