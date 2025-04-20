const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const genreController = new GenericController('genre');

router.get('/', genreController.getAll);
router.get('/:id', genreController.getById);
router.post('/', genreController.create);
router.delete('/delete/:id', genreController.delete)
router.put('/update/:id', genreController.update)

module.exports = router;
