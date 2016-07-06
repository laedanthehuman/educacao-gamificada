module.exports = app => {
    const Schema = app.db.Schema;
    const dgSchema = new Schema({
        description:String,
        objectives:[{
            description:String,
            quantity:Number
        }],
        rewards:[{
            description:String
        }],
        finish:Boolean,
        //Relacionamento One to Many
        questions:[{
            quest:app.db.Quest
        }],
        level:Number
    });

    const Dungeon = app.dd.model('Dungeon',dgSchema);

    return Dungeon;
};

