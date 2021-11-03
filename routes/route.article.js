const router = require('express').Router();
const articleController = require('../app/controllers/controller.article');

router.get('/banner', articleController.getArticleBanner);
router.get('/filter/:query', articleController.getByName);
router.get('/', articleController.getAll);
router.get('/:slug', articleController.getOnce);
router.post('/', articleController.create);
router.delete('/:id', articleController.delete);

module.exports = router;
