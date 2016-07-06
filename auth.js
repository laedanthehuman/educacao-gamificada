import passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';

module.exports = app => {
    const User = app.db.models.Users;
    const cfg = app.libs.config;
    const params = {
        secretOrKey: cfg.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    };
    const strategy = new Strategy(params, (payload, done) => {
        User.findById(payload.id, (err, user) => {
            if(err){
                returndone(err, null);
            }
            if (user) {
                return done(null, {
                    id: user.id,
                    email: user.email
                });
            }
            return done(null, false);
        })
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};