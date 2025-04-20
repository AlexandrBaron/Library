const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const fineController = new GenericController('fine');

router.get('/', fineController.getAll);
router.get('/:id', fineController.getById);
router.post('/', fineController.create);
router.delete('/delete/:id', fineController.delete)
router.put('/update/:id', fineController.update)

module.exports = router;