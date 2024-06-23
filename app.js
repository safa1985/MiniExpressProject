const express = require("express");
const booksRouter = require("./apis/books/routes");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");

const app = express();
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(morgan("dev"));
app.use(cors());
app.use(`/Books`, booksRouter);
app.use(notFound);
app.use(errorHandler);
connectDB();
app.listen(8000, () => {
  console.log("Im working on port 8000");
});
