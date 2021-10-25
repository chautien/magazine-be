const { textToSlug } = require('../../utils/text-to-slug');
const CategoryModel = require('../models/model.category');
class CategoryController {
  // [GET] Get all categories
  getAll = async (req, res) => {
    try {
      const category = await CategoryModel.find();
      res.status(200).json(category);
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [GET] Get once category by condition
  getOnce = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [POST] Add new category
  create = async (req, res) => {
    let { name, slug } = req.body;
    if (!slug) slug = textToSlug(name);
    if (!(name, slug)) throw new Error('Please fill all fileds 🚩');

    const category = CategoryModel({
      name,
      slug,
    });
    try {
      const response = await CategoryModel.create(category);
      res.status(200).json(response);
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [PUT] Update category by condition
  update = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [DELETE] Delete category by condition
  delete = async (req, res) => {
    const { id } = req.params;
    if (!id) throw new Error('Please provide id param 🚩');
    try {
      const response = await CategoryModel.deleteOne({ _id: id });
      res.status(200).json(response);
    } catch (error) {
      res.status(502).json(error);
    }
  };
}

module.exports = new CategoryController();
