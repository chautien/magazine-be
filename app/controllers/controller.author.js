const AuthorModel = require('../models/model.author');

class AuthorController {
  // [GET] Get all authors
  getAll = async (req, res) => {
    try {
      const author = await AuthorModel.find();
      res.status(200).json(author);
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [GET] Get once author by condition
  getOnce = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [POST] Add new author
  create = async (req, res) => {
    const { id, name, avatar } = req.body;
    if (!(id, name, avatar)) throw new Error('Please fill all fileds 🚩');

    const author = AuthorModel({
      name,
      avatar,
    });

    try {
      const response = await AuthorModel.create(author);
      res.status(200).json(response);
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [PUT] Update author by condition
  update = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };

  // [DELETE] Delete author by condition
  delete = async (req, res) => {
    try {
      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(502).json(error);
    }
  };
}

module.exports = new AuthorController();
