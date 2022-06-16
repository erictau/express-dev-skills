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
// GET Edit
router.get('/:name/edit', skillsCtrl.edit);

// POST Create
router.post('/', skillsCtrl.create);

// DELETE Delete
router.delete('/:name', skillsCtrl.delete);

// PUT Update
router.put('/:name', skillsCtrl.update);

// Export
module.exports = router;
