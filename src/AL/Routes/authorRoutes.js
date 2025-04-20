const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const authorController = new GenericController('author');

router.get('/', authorController.getAll);
router.get('/:id', authorController.getById);
router.post('/', authorController.create);
router.delete('/delete/:id', authorController.delete)
router.put('/update/:id', authorController.update)

module.exports = router;
