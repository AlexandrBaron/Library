const express = require('express');
const router = express.Router();
const GenericController = require('../Controllers/genericController');
const reservationController = new GenericController('reservation');

router.get('/', reservationController.getAll);
router.get('/:id', reservationController.getById);
router.post('/', reservationController.create);
router.delete('/delete/:id', reservationController.delete)
router.put('/update/:id', reservationController.update)

module.exports = router;