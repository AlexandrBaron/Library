const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const bookController = new GenericController('books');

router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.create);
router.delete('/delete/:id', bookController.delete)
router.put('/update/:id', bookController.update)

module.exports = router;