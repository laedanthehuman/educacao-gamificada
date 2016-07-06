import bcrypt from 'bcrypt';
module.exports = (sequelize, DataType) => {
    const Schema = app.db.Schema;
    const userSchema = new Schema({
        name: String,
        user: String,
        password: String,
        email: String,
        gm:Boolean
    });

    userSchema.methods.isPassword = (encodePassword, password) => {
        return bcrypt.compareSync(password, encodePassword);
    };

    const User = app.db.model('User',userSchema);

    return User;
}