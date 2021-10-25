const ArticleModel = require('../models/model.article');

class ArticleController {
  // [GET] Get all articles
  getAll = async (req, res) => {
    try {
      const article = await ArticleModel.find();
      res.status(200).json({
        status: true,
        data: article,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };

  // [GET] Get once article by condition
  getOnce = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };

  // [POST] Add new article
  create = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };

  // [PUT] Update article by condition
  update = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };

  // [DELETE] Delete article by condition
  delete = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };
}

module.exports = new ArticleController();
