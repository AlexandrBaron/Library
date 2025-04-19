const express = require('express');
const router = express.Router();
const controller = require('../Controllers/authorController');

router.get('/', controller.getAllAuthors);

module.exports = router;