const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const actionlogController = new GenericController('actionLog');

router.get('/', actionlogController.getAll);
router.get('/:id', actionlogController.getById);
router.post('/', actionlogController.create);
router.delete('/delete/:id', actionlogController.delete)
router.put('/update/:id', actionlogController.update)

module.exports = router;