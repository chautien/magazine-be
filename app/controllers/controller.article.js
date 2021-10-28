require('../models/model.author');
require('../models/model.category');
const { textToSlug } = require('../../utils/text-to-slug');
const ArticleModel = require('../models/model.article');

class ArticleController {
  // [GET] Get all articles
  getAll = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    console.log(page, limit);
    try {
      const totalRows = await ArticleModel.count();
      const article = await ArticleModel.find()
        .populate(['author', 'category'])
        .sort({ created_at: -1 })
        .skip(page > 0 ? (page - 1) * limit : 0)
        .limit(limit);
      if (article.length <= 0)
        res.status(200).json({
          count: 0,
          message: 'Not found!',
        });
      res.status(200).json({
        data: article,
        paginate: {
          totalRows,
          page,
          limit,
        },
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [GET] Get once article by condition
  getOnce = async (req, res) => {
    const { slug } = req.params;
    try {
      const article = await ArticleModel.findOne({ slug }).populate([
        'author',
        'category',
      ]);
      article
        ? res.status(200).json(article)
        : res.status(200).json({ status: false, message: 'Not found' });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [GET] Get aritcle if banner active is true
  getArticleBanner = async (req, res) => {
    try {
      const acticleBannerActive = await ArticleModel.find({
        banner_active: true,
      }).select('title introduce thumbnail banner_active');
      res.status(200).json(acticleBannerActive);
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [POST] Add new article
  create = async (req, res) => {
    const {
      title,
      introduce,
      content,
      time_to_read,
      category,
      author,
      thumbnail,
      banner_active,
    } = req.body;
    let { slug } = req.body;

    if (!slug) slug = textToSlug(title);
    if (
      !(title,
      introduce,
      content,
      time_to_read,
      category,
      author,
      thumbnail,
      banner_active)
    )
      res
        .status(500)
        .json({ status: false, message: 'Please fill all field!' });

    const article = ArticleModel({
      slug,
      title,
      thumbnail,
      banner_active,
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
