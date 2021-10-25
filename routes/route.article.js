const router = require('express').Router();
const articleController = require('../app/controllers/controller.article');

router.get('/', articleController.getAll);
router.post('/', articleController.create);
router.delete('/:id', articleController.delete);

module.exports = router;
