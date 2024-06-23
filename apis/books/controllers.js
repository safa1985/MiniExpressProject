const Book = require("../../models/Book");

const getALLBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return next(error);
  }
};

const getOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const bookX = await Book.findById(id);
    if (bookX) {
      return res.status(200).json(bookX);
    } else {
      return res
        .status(400)
        .json({ meg: "Sorry! The Book that you looking for is not found" });
    }
  } catch (error) {
    next(error);
  }
};
const createOneBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Book.findByIdAndDelete(id);
    return res.status(200).json({ meg: "Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getALLBooks,
  getOneBook,
  createOneBook,
  deleteBook,
  updateBook,
};
