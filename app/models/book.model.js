module.exports = (sequelize, Sequelize) => {

  const Book = sequelize.define("book", {

    // TODO: add fields for book model: tile, genre, puplishedYear & authorId


  });

  return Book;
};