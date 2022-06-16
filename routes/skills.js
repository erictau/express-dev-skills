var express = require('express');
var router = express.Router();

// Require the controller
const skillsCtrl = require('../controllers/skills');

/* Routes */
// GET Index
router.get('/', skillsCtrl.index);
// GET New
router.get('/new', skillsCtrl.new);
// GET Show
router.get('/:name', skillsCtrl.show);

// POST Create
router.post('/', skillsCtrl.create);

// DELETE Delete
router.delete('/:name', skillsCtrl.delete);

// Export
module.exports = router;
