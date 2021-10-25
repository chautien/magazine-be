const router = require('express').Router();
const articleController = require('../app/controllers/controller.article');

router.get('/', articleController.getAll);

module.exports = router;
