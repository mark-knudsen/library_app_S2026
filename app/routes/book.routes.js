module.exports = app => {

  const books = require("../controllers/book.controller.js");
  const router = require("express").Router();

  // TODO: define routes for create

  // TODO: define routes for findAll

  // TODO: define routes for findOne

  // TODO: define routes for update

  // TODO: define routes for delete

  // TODO: define routes for deleteAll

  app.use("/api/books", router);

};
