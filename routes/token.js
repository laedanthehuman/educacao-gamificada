import jwt from 'jwt-simple';

module.exports = app => {
    const cfg = app.libs.config;
    const User = app.db.models.User;

    app.post('/token', (req, res) => {
        if (req.body.email && req.body.password) {
            const email = req.body.email;
            const password = req.body.password;
            User.findOne({
                'email': email,
            }, (err, user) => {
                if (err) {
                    res.sendStatus(401);
                }
                if (User.isPassword(user.password, password)) {
                    const payload = { id: user.id };
                    res.json({ token: jwt.encode(payload, cfg.jwtSecret) });
                } else {
                    res.sendStatus(401);
                }
            });
        } else {
            res.sendStatus(401);
        }
    });
}