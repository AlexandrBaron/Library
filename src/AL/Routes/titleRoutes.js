const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const titleController = new GenericController('title');

router.get('/', titleController.getAll);
router.get('/:id', titleController.getById);
router.post('/', titleController.create);
router.delete('/delete/:id', titleController.delete)
router.put('/update/:id', titleController.update)

module.exports = router;