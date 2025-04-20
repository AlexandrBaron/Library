const express = require('express');
const router = express.Router();
const controller = require('../Controllers/authorController');

router.get('/', controller.getAllAuthors);
router.get('/:id', controller.getAuthorById);
router.post('/', controller.createAuthor);
router.delete('/delete/:id', controller.deleteAuthor)
router.put('/update/:id', controller.updateAuthor)

module.exports = router;
