module.exports = app => {
    const User = app.db.models.User;

    app.route('/user')
        .all(app.auth.authenticate())
        .get((req, res) => {
            User.findById(req.user.id, (err,user) =>{
                if(err){
                    res.status(412).json({ msg: err });
                }
                res.json(user);
            });
        })
        .delete((req, res) => {
            User.findOneAndRemove({ id: req.params.id },(err) =>{
                if(err){
                    res.status(412).json({ msg: err});
                }
                res.sendStatus(204);
            });
        });
    app.post('/users', (req, res) => {
        let newUser = new User(req.body);

        newUser.save(err =>{
            if(err){
                res.status(412).json({ msg: err });
            }
            res.json(newUser);
        })
            
    });
}