const express = require("express");
const {
  getALLBooks,
  getOneBook,
  createOneBook,
  deleteBook,
  updateBook,
} = require("./controllers");
const upload = require("../../middleware/multer");
const booksRouter = express.Router();

booksRouter.get(`/`, getALLBooks);
booksRouter.get(`/:id`, getOneBook);
booksRouter.post(`/`, upload.single("image"), createOneBook);
booksRouter.delete(`/:id`, deleteBook);
booksRouter.put(`/:id`, updateBook);

module.exports = booksRouter;
