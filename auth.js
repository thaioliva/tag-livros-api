import 'dotenv/config';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

let userId;
export default app => {
  const Users = app.models.Users;
  const opts = {};
  opts.secretOrKey = process.env.JWTSECRET;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  const strategy = new Strategy(opts, (payload, done) => {
    Users.findAll({ where: { id: payload.id } })
    .then(user => {
      if (user) {
        return done(null, {
          id: user.id,
          email: user.email,
        });
      }
      return done(null, false);
    })
    .catch(error => done(error, null));
  });

  passport.use(strategy);

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: false }),
    userId: () => passport.serializeUser((user, done) => done(null, user.id))
  };
};
