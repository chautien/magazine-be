const router = require('express').Router();
const authorController = require('../app/controllers/controller.author');

router.get('/', authorController.getAll);

module.exports = router;
