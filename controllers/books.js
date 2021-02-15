import HttpStatus from 'http-status';
import Users from '../models/users';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class BooksController {
  constructor(Books) {
    this.Books = Books;
  }

  getAll(query) {
    const criteria = (!!query) ? { where : query } : {} ;
    criteria.attributes = ['title', 'isbn', 'pages', 'abstract', 'authors', 'release_date'];
    return this.Books.findAll(criteria)
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  getById(params) {
    return this.Books.findOne({
      where: params,
    })
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message));
  }

  isValid(data) {
    const isValid = this.Books.isValid(data);
    return { isValid: isValid, status: HttpStatus.OK, message: 'Release date must be greater than 2000' };
  }

  create(data, id) {
    const book = {
      ...data,
      userId: id
    }
    return this.Books.create(book, { include: [ Users ] })
      .then(result => defaultResponse(result, HttpStatus.CREATED))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(data, params) {
    return this.Books.update(data, {
      where: params,
    })
      .then(result => defaultResponse(result))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  delete(params) {
    return this.Books.destroy({
      where: params,
    })
      .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}

export default BooksController;
