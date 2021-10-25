const AuthorModel = require('../models/model.author');

class AuthorController {
  // [GET] Get all authors
  getAll = async (req, res) => {
    try {
      const author = await AuthorModel.find();
      res.status(200).json({
        status: true,
        data: author,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };

  // [GET] Get once author by condition
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
      res.status(200).json({
        status: true,
        data: response,
      });
    } catch (error) {
      res.status(502).json({
        status: false,
        error,
      });
    }
  };

  // [PUT] Update author by condition
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

  // [DELETE] Delete author by condition
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

module.exports = new AuthorController();
