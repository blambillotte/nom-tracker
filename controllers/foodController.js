const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const food = require('../models/food');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  food.listAll(function(data) {
    var hbsObject = {
      food: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.put('/api/food/:id', function(req, res) {
  const id = req.params.id;
  const column = req.body.column;
  const value = req.body.value;

  res.status(200).end();
  console.log(req.body);

  food.update(column, value, id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.post("/api/food", function(req, res) {
  food.create(req.body.column, req.body.value, function(result) {
    // Send back the ID of the new food item
    res.json({ id: result.insertId });
  });
});

// Export routes for server.js to use.
module.exports = router;
