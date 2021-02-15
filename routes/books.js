import BooksController from '../controllers/books';

export default (app) => {
  const booksController = new BooksController(app.models.Books);
  app.route('/books')
    .all(app.auth.authenticate())
    .get((req, res) => {
      booksController.getAll({ ...req.query, userId: app.auth.userId() })
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      const isValid = booksController.isValid(req.body);
      if(!isValid.isValid) {
        res.status(isValid.status);
        res.json({ message: isValid.message });
      };
      booksController.create(req.body, app.auth.userId())
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/books/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      booksController.getById(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      booksController.update(req.body, req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      booksController.delete(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });
};
