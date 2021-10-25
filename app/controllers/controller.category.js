const CategoryModel = require('../models/model.category');

class CategoryController {
  // [GET] Get all categories
  getAll = async (req, res) => {
    try {
      const category = await CategoryModel.find();
      res.status(200).json({
        status: true,
        data: category,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };

  // [GET] Get once category by condition
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

  // [POST] Add new category
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

  // [PUT] Update category by condition
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

  // [DELETE] Delete category by condition
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

module.exports = new CategoryController();
