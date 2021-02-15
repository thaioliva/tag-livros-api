import HttpStatus from 'http-status';
import Users from '../models/users';
import redis from 'redis';
import cacher from 'sequelize-redis-cache';
import database from '../config/datasource';

const rc = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

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

  async getAllCache(query) {
    const criteria = (!!query) ? { where: { userId: query.userId } } : {};
    const amount = await this.Books.count(criteria);

    criteria.attributes = ['title', 'isbn', 'pages', 'abstract', 'authors', 'release_date'];
    criteria.offset = (query?.offset) ? query?.offset : 0;
    criteria.limit = (query?.limit) ? query?.limit : 10;
    
    const db = cacher(database, rc)
      .model('Books')
      .ttl(5);

    return db.findAll({ where: { userId: query.userId } })
      .then(result => {
        const response = { ...result, total: amount };
        return defaultResponse(response);
      })
      .catch(error => errorResponse(error.message));
  }

  async getAll(query) {
    const criteria = (!!query) ? { where : { userId: query.userId } } : {};
    const amount = await this.Books.count(criteria);
    criteria.attributes = ['title', 'isbn', 'pages', 'abstract', 'authors', 'release_date'];
    criteria.offset = (query?.offset) ? query?.offset : 0;
    criteria.limit = (query?.limit) ? query?.limit : 10;

    return this.Books.findAll(criteria)
      .then(result => { 
        const response = { ...result, total: amount };
        return defaultResponse(response);
      })
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
    return this.Books.create(book, { include: [Users] })
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
