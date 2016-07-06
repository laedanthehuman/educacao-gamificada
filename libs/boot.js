import https from 'https';
import fs from 'fs';

module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        const credentials = {
            key: fs.readFileSync('ntask.key', 'utf-8'),
            cert: fs.readFileSync('ntask.cert', 'utf-8')
        }
            https.createServer(credentials, app)
                 .listen(app.get("port"), () => console.log(`NTask API - porta ${app.get("port")}`));
    }
};