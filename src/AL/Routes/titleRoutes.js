const express = require('express');
const router = express.Router();
const TitleController = require('../Controllers/titleController');
const titleController = new TitleController();

router.get('/filter', titleController.findFiltered);
router.get('/:id', titleController.getById);
router.get('/', titleController.getAll);
router.post('/', titleController.create);
router.delete('/delete/:id', titleController.delete)
router.put('/update/:id', titleController.update)

module.exports = router;