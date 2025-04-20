const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const userController = new GenericController('user');

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.delete('/delete/:id', userController.delete)
router.put('/update/:id', userController.update)

module.exports = router;