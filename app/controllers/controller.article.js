require('../models/model.author');
require('../models/model.category');
const { textToSlug } = require('../../utils/text-to-slug');
const ArticleModel = require('../models/model.article');

class ArticleController {
  // [GET] Get all articles
  getAll = async (req, res) => {
    try {
      const article = await ArticleModel.find()
        .populate(['author', 'category'])
        .sort({ created_at: -1 });
      res.status(200).json(article);
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [GET] Get once article by condition
  getOnce = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [POST] Add new article
  create = async (req, res) => {
    const { title, introduce, content, time_to_read, category, author } =
      req.body;
    let { slug } = req.body;

    if (!slug) slug = textToSlug(title);
    if (!(slug, title, introduce, content, time_to_read, category, author))
      throw new Error('Please fill all fileds 🚩');

    const article = ArticleModel({
      slug,
      title,
      introduce,
      content,
      time_to_read,
      category,
      author,
    });
    try {
      const response = await ArticleModel.create(article);
      res.status(200).json(response);
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [PUT] Update article by condition
  update = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [DELETE] Delete article by condition
  delete = async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error('Please provide id param 🚩');

    try {
      const response = await ArticleModel.deleteOne({ _id: id });
      res.status(200).json(response);
    } catch (error) {
      res.status(502).json(error);
    }
  };
}

module.exports = new ArticleController();
