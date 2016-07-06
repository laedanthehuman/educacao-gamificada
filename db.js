import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

let db = null;

module.exports = app => {
    if (!db) {
        const config = app.libs.config;
        mongoose.connect(config.uri,config.params);
        db = {
            Schema:mongoose.Schema,
            model:mongoose.model,
            connection:mongoose.connect,
            models: {}
        };
        const dir = path.join(__dirname, "models");
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });
        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });
    }
    return db;
}