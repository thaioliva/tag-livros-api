import 'dotenv/config';
import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

export default app => {
  const Users = app.models.Users;

  app.post('/token', (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      Users.findOne({ where: { email } })
      .then(user => {
        if (Users.isPassword(password, user.password)) {
          const payload = { id: user.id };
          res.json({
            token: jwt.encode(payload, process.env.JWTSECRET),
          });
        } else {
          res.sendStatus(HttpStatus.UNAUTHORIZED);
        }
      })
      .catch(() => res.sendStatus(HttpStatus.UNAUTHORIZED));
    } else {
      res.sendStatus(HttpStatus.UNAUTHORIZED);
    }
  });
};

