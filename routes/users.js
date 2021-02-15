import UsersController from '../controllers/users';

export default (app) => {
  const usersController = new UsersController(app.models.Users);
  app.route('/users')
    .all(app.auth.authenticate())
    .get((req, res) => {
      usersController.getAll()
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
  app.route('/public/user')
    .post((req, res) => {
      usersController.create(req.body)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/users/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      usersController.getById(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      usersController.update(req.body, req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      usersController.delete(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });
};
