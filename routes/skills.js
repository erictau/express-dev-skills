var express = require('express');
var router = express.Router();

// Require the controller
const skillsCtrl = require('../controllers/skills');

/* Routes */
// GET Index
router.get('/', skillsCtrl.index);

// GET Show
router.get('/:name', skillsCtrl.show);

module.exports = router;
