const mongoose = require(`mongoose`);

const BooksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: "5" },
  image: { type: String, default: "" },
});
module.exports = mongoose.model("Book", BooksSchema);
