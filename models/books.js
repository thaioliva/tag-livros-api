import { DataTypes } from 'sequelize';
import { format, getYear, isDate, parseISO } from 'date-fns';
import database from '../config/datasource';
import Users from './users';

const Books = database.define('Books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  pages: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: true
  },
  abstract: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  release_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  authors: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  }
});

Books.isValid = (book) => {
  let isValid = true;
  if (book?.release_date) {
    const date = parseISO(book.release_date);
    if(date == 'Invalid Date') {
      isValid = false;
    } else {
      book.release_date = date;
      const year = getYear(new Date(book.release_date));
      isValid = Number(year) >= 2000;
    }
  }
  return isValid;
}

Books.belongsTo(Users);

module.exports = Books;