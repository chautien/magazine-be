const router = require('express').Router();
const categoryController = require('../app/controllers/controller.category');

router.get('/', categoryController.getAll);

module.exports = router;
