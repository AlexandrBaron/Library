const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const loanController = new GenericController('loan');

router.get('/', loanController.getAll);
router.get('/:id', loanController.getById);
router.post('/', loanController.create);
router.delete('/delete/:id', loanController.delete)
router.put('/update/:id', loanController.update)

module.exports = router;