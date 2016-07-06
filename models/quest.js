module.exports = app => {
    const Schema = app.db.Schema;
    const questSchema = new Schema({
        description:String,
        objectives:[{
            description:String,
            quantity:Number
        }],
        rewards:[{
            description:String
        }],
        finish:Boolean,
        sidequest:Boolean,
        boss:Boolean,
        level:Number
    });

    const Quest = app.dd.model('Quest',questSchema);

    return Quest;
};

