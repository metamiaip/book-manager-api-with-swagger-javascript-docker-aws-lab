const {DataTypes} = require('sequelize');
const sequelize = require('../database');

const Book = sequelize.define('Books', {
  // Model attributes are defined here
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Books',
});

module.exports = Book;
